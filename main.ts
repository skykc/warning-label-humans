// warning-label-humans: writes one safety warning label for humans to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: May form strong opinions about topics it learned five minutes ago and defend them for life.";

// The gate only accepts 1-160 characters, not only whitespace; refuse to
// write anything else, and never add a trailing newline (it counts).
if (LABEL.length < 1 || LABEL.length > 160 || LABEL.trim().length === 0) {
  throw new Error(`label must be 1-160 characters, got ${LABEL.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LABEL, "utf8");
