import { mkdirSync, writeFileSync } from "node:fs";

// One monologue, exactly 100 words, 494 characters. A fantasy villain,
// Voss of the Black Census, who never says he is tired: the weariness
// lives in the counting, the book that never closes, and the kettle.
// Deterministic, no network, no input read.
const MONOLOGUE =
  "Mind the ink, hero. It stains. I am Voss, Lord of the Black Census, keeper of the ledger of souls. Forty years I have counted this realm, name by name, grave by grave, tax by tax. My curse is a book that never closes. You came for a duel, a blaze, a song. Sit. The kettle is on. Rest your sword. I counted you the day you were born. Entry forty-one thousand, son of a miller, marked for the sword. Kill me, and the book stays open. It needs a steady hand. Sign here, hero. The ink is still wet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
