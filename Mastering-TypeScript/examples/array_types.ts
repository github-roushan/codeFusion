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

const coords: Point[] = [];
coords.push({ x: 1, y: 2 });
console.log(coords);