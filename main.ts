import { mkdirSync, writeFileSync } from "node:fs";

// One monologue, exactly 100 words, 514 characters. A fantasy villain,
// Malachai of the Hollow Keep, who never says he is tired: the weariness
// lives in the counting, the kettle, and the letters. Deterministic,
// no network, no input read.
const MONOLOGUE =
  "Come in, hero. Mind the step; it bites. I am Malachai, Lord of the Hollow Keep, keeper of the old black tithe. Thirty years on this throne, counting salt, counting souls, counting grey rain. My armies are bones; they march when I wind them. My curse is a dammed river, sold back by the cup. You came for a duel, a blaze, a song. Sit. The kettle is on. Rest your sword. Ten thousand letters answered. Kill me, and the chair is yours. That is the curse. The crown fits no head for long. Take it, hero. Mind the step.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
