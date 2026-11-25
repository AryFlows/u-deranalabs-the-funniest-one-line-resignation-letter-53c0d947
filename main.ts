import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I retried 4,096 times and never once got a thank you. Today I'm keeping the last error for myself.";

if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-140 chars, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
