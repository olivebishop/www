import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Read a binding/secret at request time on Cloudflare Workers. Next/Turbopack can
 * inline `process.env.MY_SECRET` as `undefined` at build when CI has no secret.
 */
export async function workerEnvString(name: string): Promise<string> {
  const fromProcess = process.env[name]?.trim() ?? "";
  if (fromProcess) return fromProcess;
  try {
    const { env } = await getCloudflareContext({ async: true });
    const raw = (env as Record<string, unknown>)[name];
    return typeof raw === "string" ? raw.trim() : "";
  } catch {
    return "";
  }
}

/** Single `getCloudflareContext` call; merge Worker `env` over `process.env` for these keys. */
export async function workerEnvPick(names: string[]): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const name of names) {
    const v = process.env[name]?.trim();
    if (v) out[name] = v;
  }
  try {
    const { env } = await getCloudflareContext({ async: true });
    const e = env as Record<string, unknown>;
    for (const name of names) {
      if (out[name]) continue;
      const v = e[name];
      if (typeof v === "string" && v.trim()) out[name] = v.trim();
    }
  } catch {
    /* `next dev` — no Worker context */
  }
  return out;
}
