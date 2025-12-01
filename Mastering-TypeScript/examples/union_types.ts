import { Point, Loc } from "./all_types";
let age: number | string = 21;
age = "Twenty One";

console.log(age);

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 32.124, long: -32.124 };
