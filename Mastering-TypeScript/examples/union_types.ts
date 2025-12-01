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

// any array
const nums: any[] = [1, 2, 3, "four", true, { name: "John" }];

// array of only number and strings
const stuff: (number | string)[] = [1, 2, 3, "four"];
const locations: (Point | Loc)[] = [{ x: 1, y: 2 }, { lat: 1, long: 3 }];


// Literal Types
const zero: 0 = 0;
let mood: "happy" | "sad" = "happy";

type DayOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

let today = "Monday";