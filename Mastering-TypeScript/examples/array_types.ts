import { Point } from "./all_types";

const activeUsers: string[] = [];
activeUsers.push("Roushan");
console.log(activeUsers);

const ageList: number[] = [];
ageList.push(21);
console.log(ageList);

// Alternate Syntax
let names: Array<string> = [];
names.push("Roushan");
console.log(names);

// Array of custome types

const coords: Point[] = [];
coords.push({ x: 1, y: 2 });
console.log(coords);

// Multi Dimensional Array
const board: string[][] = [];
board.push(["X", "O", "X"]);
board.push(["X", "O", "X"]);
board.push(["X", "O", "X"]);
console.log(board);