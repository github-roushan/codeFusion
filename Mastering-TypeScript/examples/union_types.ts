import { Point, Loc } from "./all_types";
type ageType = number | string;
let age: ageType = 21;
age = "Twenty One";

console.log(age);

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 32.124, long: -32.124 };

function printAge(age: ageType): void {
    console.log(`Age is ${age}`);
}

// type narrowing using typeof
function calcTax(price: number | string) {
    if (typeof price === "string") {
        price.replace("$", "");
        price = parseInt(price);
    }
    else if (typeof price === "number") {
        return price * 0.08;
    }
    return price;
}