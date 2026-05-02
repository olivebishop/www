/** Minimal typings for sql.js (package ships without TypeScript declarations). */
declare module "sql.js" {
  export interface Database {
    run(sql: string): void;
    exec(sql: string): Array<{ columns: string[]; values: unknown[][] }>;
    prepare(sql: string): { run(params?: unknown[]): void; free(): void };
    close(): void;
    export(): Uint8Array;
  }

  export default function initSqlJs(config?: {
    locateFile?: (file: string) => string;
  }): Promise<{ Database: new (data?: Buffer | Uint8Array | null) => Database }>;
}
