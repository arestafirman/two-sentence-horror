// Two-Sentence Horror — entry generator.
//
// Ketukan 1 (setup): a doorbell camera is installed for a calm, practical
// reason — to know who comes to the door at night. Nothing supernatural
// is promised; it is just a household device doing its job.
//
// Ketukan 2 (reveal): the camera has only ever recorded the narrator
// himself, standing outside, knocking to be let in. The watcher and the
// thing at the door are the same person, so "who comes to the door"
// already has its answer — and the narrator is locked out of his own home.
//
// The program below only writes that exact text to entry.txt. Before it
// writes anything it runs the competition gates itself: the entry must be
// 1-400 characters, exactly two sentences, and must not be blank or end
// with a trailing newline. If any gate fails, it exits without writing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I installed a doorbell camera so I would know who comes to the door at night. It has only ever recorded me, standing outside, knocking to be let in.";

/**
 * @param {string} text
 * @returns {number}
 */
function countSentences(text) {
  // Split on a sentence-ending mark followed by whitespace; a clean
  // two-sentence entry yields exactly two non-empty pieces.
  return text.split(/(?<=[.!?])\s+/).filter((part) => part.length > 0).length;
}

/**
 * Runs every competition gate before any file is written. Throws with a
 * specific message naming the failed gate, so a bad entry can never
 * reach entry.txt silently.
 * @param {string} text
 */
function checkGates(text) {
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is empty or only whitespace");
  }
  if (text.length < 1 || text.length > 400) {
    throw new Error(
      `gate failed: entry is ${text.length} characters, expected 1-400`,
    );
  }
  if (text.endsWith("\n")) {
    throw new Error("gate failed: entry must not end with a trailing newline");
  }
  const sentences = countSentences(text);
  if (sentences !== 2) {
    throw new Error(
      `gate failed: entry has ${sentences} sentences, expected exactly 2`,
    );
  }
}

// Gates run before any file is touched, so a bad entry can never be written.
checkGates(ENTRY);

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(
  `wrote entry.txt (${ENTRY.length} characters, ${countSentences(ENTRY)} sentences)`,
);
