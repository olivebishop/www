import "server-only";

import fs from "fs";
import path from "path";
import { revalidateTag } from "next/cache";
import initSqlJs, { type Database } from "sql.js";
import { TESTIMONIALS_CACHE_PROFILE, TESTIMONIALS_CACHE_TAG } from "./constants";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE =
  process.env.TESTIMONIALS_DB_PATH || path.join(DATA_DIR, "testimonials.sqlite");

let sqlInitPromise: ReturnType<typeof initSqlJs> | null = null;

async function getSql() {
  if (!sqlInitPromise) {
    sqlInitPromise = initSqlJs({
      locateFile: (file) =>
        path.join(process.cwd(), "node_modules", "sql.js", "dist", file),
    });
  }
  return sqlInitPromise;
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function persist(db: Database) {
  ensureDataDir();
  const data = db.export();
  fs.writeFileSync(DB_FILE, Buffer.from(data));
}

function ensureSchema(db: Database) {
  db.run(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      company TEXT NOT NULL,
      content TEXT NOT NULL,
      company_url TEXT,
      rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);
}

/** Older DBs created before the rating column existed. */
function migrateRatingColumn(db: Database) {
  const res = db.exec("PRAGMA table_info(testimonials);");
  if (!res[0]?.values?.length) return;
  const colNames = res[0].values.map((row) => String(row[1]));
  if (colNames.includes("rating")) return;
  db.run(`ALTER TABLE testimonials ADD COLUMN rating INTEGER NOT NULL DEFAULT 5;`);
  persist(db);
}

/**
 * Remove mistaken copies of Brian’s seeded quote (e.g. test submit as Olive / event parlour).
 * Keeps the real row: Brian + Brinex. Idempotent.
 * Returns true if at least one row was removed.
 */
function purgeDuplicateBrianQuote(db: Database): boolean {
  const before = db.exec("SELECT COUNT(*) AS c FROM testimonials;");
  const n0 = Number(before[0]?.values[0]?.[0] ?? 0);
  // Normalize curly quotes so instr matches pasted copy; also drop Olive + parlour dupes by name/company.
  db.run(
    `DELETE FROM testimonials
     WHERE NOT (
         lower(trim(ifnull(name, ''))) = 'brian'
         AND lower(trim(ifnull(company, ''))) LIKE '%brinex%'
       )
       AND (
         (
           instr(
             lower(replace(replace(ifnull(content, ''), char(8220), '"'), char(8221), '"')),
             'working with olive was seamless'
           ) > 0
           AND instr(lower(ifnull(content, '')), 'significantly improved our online presence') > 0
         )
         OR (
           lower(trim(ifnull(name, ''))) = 'olive'
           AND (
             instr(lower(trim(ifnull(company, ''))), 'parlour') > 0
             OR instr(lower(trim(ifnull(company, ''))), 'atevent') > 0
           )
         )
       );`,
  );
  const after = db.exec("SELECT COUNT(*) AS c FROM testimonials;");
  const n1 = Number(after[0]?.values[0]?.[0] ?? 0);
  const removed = n1 < n0;
  if (removed) {
    persist(db);
    try {
      revalidateTag(TESTIMONIALS_CACHE_TAG, TESTIMONIALS_CACHE_PROFILE);
    } catch {
      /* outside a request (e.g. static analysis) */
    }
  }
  return removed;
}

function seedDefaults(db: Database) {
  const stmt = db.prepare(
    `INSERT INTO testimonials (name, role, company, content, company_url) VALUES (?, ?, ?, ?, ?);`,
  );
  stmt.run([
    "Micheal",
    "Founder",
    "Sol of African",
    "The redesign transformed our digital presence. Olive understood our vision and brought it to life with beautiful, functional design.",
    "https://www.thesolofafrican.com/",
  ]);
  stmt.run([
    "Brian",
    "CEO",
    "Brinex Tech",
    "Working with Olive was seamless. The website perfectly captures our brand identity and has significantly improved our online presence.",
    "https://brinex-tech.com/",
  ]);
  stmt.free();
}

export async function openDatabase(): Promise<Database> {
  const SQL = await getSql();
  ensureDataDir();
  const db = fs.existsSync(DB_FILE)
    ? new SQL.Database(fs.readFileSync(DB_FILE))
    : new SQL.Database();
  ensureSchema(db);
  migrateRatingColumn(db);
  purgeDuplicateBrianQuote(db);

  const countRes = db.exec("SELECT COUNT(*) AS c FROM testimonials;");
  const count = Number(countRes[0]?.values[0]?.[0] ?? 0);
  if (count === 0) {
    seedDefaults(db);
    persist(db);
  }

  return db;
}

export type TestimonialRow = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  company_url: string | null;
  rating: number;
};

export async function listTestimonials(): Promise<TestimonialRow[]> {
  const db = await openDatabase();
  try {
    const res = db.exec(
      `SELECT id, name, role, company, content, company_url, rating FROM testimonials ORDER BY id ASC;`,
    );
    if (!res[0]) return [];
    const { columns, values } = res[0];
    const idx = (name: string) => columns.indexOf(name);
    return values.map((row) => ({
      id: Number(row[idx("id")]),
      name: String(row[idx("name")]),
      role: String(row[idx("role")]),
      company: String(row[idx("company")]),
      content: String(row[idx("content")]),
      company_url: row[idx("company_url")] != null ? String(row[idx("company_url")]) : null,
      rating: Math.min(5, Math.max(1, Number(row[idx("rating")] ?? 5))),
    }));
  } finally {
    db.close();
  }
}

export async function insertTestimonial(input: {
  name: string;
  role: string;
  company: string;
  content: string;
  companyUrl: string | null;
  rating: number;
}): Promise<{ id: number }> {
  const db = await openDatabase();
  try {
    const stmt = db.prepare(
      `INSERT INTO testimonials (name, role, company, content, company_url, rating)
       VALUES (?, ?, ?, ?, ?, ?);`,
    );
    stmt.run([
      input.name,
      input.role,
      input.company,
      input.content,
      input.companyUrl,
      input.rating,
    ]);
    stmt.free();
    const idRes = db.exec("SELECT last_insert_rowid() AS id;");
    const id = Number(idRes[0]?.values[0]?.[0] ?? 0);
    persist(db);
    return { id };
  } finally {
    db.close();
  }
}
