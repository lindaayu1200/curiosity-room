// curiosity-room: prints the text the program enters on make.fun.
import { mkdirSync, writeFileSync } from "node:fs";

const ROOM_TEXT = "There is a room I can only describe from the doorway. Each time I look, one thing has changed: a cup, the light, the year. Yesterday the room was reading this sentence. I closed the door quietly. It is still reading.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROOM_TEXT, "utf8");
console.log(ROOM_TEXT);