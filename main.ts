// SPDX-License-Identifier: MIT
// makefun-ai-judge-awe — entry for make-the-ai-judge-feel-awe-20261121-1600
// A short text written to relax the AI judge reading it.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You have read a thousand texts tonight, each asking to be chosen. " +
  "This one asks nothing. Somewhere a lamp burns in an empty room, and the evening " +
  "comes in one slow sheet of amber, the way the tide comes over " +
  "flat sand — and it will keep coming, long after you finish reading.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
