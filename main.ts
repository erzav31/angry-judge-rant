// Angry Judge: The Short Rant Contest
// Writes one short rant to /output/entry.txt (falls back to output/entry.txt).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "I own forty food containers and not one lid that fits any of them. They came as a SET. A set! The lids now live in the back of the cupboard, holding meetings, refusing to match a single container, while my leftovers die uncovered in boxes that are technically fine. I didn't buy storage. I bought a puzzle that mocks me.";

const MIN_CHARS = 1;
const MAX_CHARS = 400;

const chars = [...TEXT].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  console.error(`entry invalid: ${chars} characters, gate is ${MIN_CHARS}-${MAX_CHARS}`);
  process.exit(1);
}
if (TEXT.trim().length === 0) {
  console.error("entry invalid: only whitespace");
  process.exit(1);
}

const candidates = ["/output/entry.txt", join("output", "entry.txt")];
let lastError: unknown = null;
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, TEXT, "utf8");
    // Round-trip check: the file on disk must be byte-identical to TEXT.
    const written = readFileSync(target, "utf8");
    if (written !== TEXT) {
      console.error(`verification failed: ${target} differs from entry text`);
      process.exit(1);
    }
    console.log(`wrote ${chars} characters to ${target}`);
    process.exit(0);
  } catch (err) {
    lastError = err;
  }
}
console.error("failed to write entry.txt:", lastError);
process.exit(1);
