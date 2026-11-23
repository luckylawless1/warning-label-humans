// Warning Label for Humans: One Line, Big Laugh
// Writes the entry — one warning-label line for every human being —
// to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Contents become an expert after one YouTube tutorial and will explain your own job back to you.";

// Validation gate: the competition's sealed scorer requires /output/entry.txt
// to be UTF-8 text of 1 to 160 characters, not only white space, one line.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`line must be 1-160 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
