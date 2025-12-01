// Part 1
let highScore: number | boolean;
highScore = false; // or 1

// Part 2
let stuff: number[] | string[] = [];

// Part 3
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Part 4
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
}

// Part 5
type RGB = {
    r: number;
    g: number;
    b: number;
}

type HSL = {
    h: number;
    s: number;
    l: number;
}

const colors1: (RGB | HSL)[] = [];

// Part 6
const greet1 = (person: string | string[]): void => {
    if (typeof person === "string") {
        console.log(`Hello, ${person}`);
        return;
    }
    person.forEach(arg => console.log(`Hello, ${arg}`));
}

greet1("Roushan");
greet1(["Person1", "Person2", "Person3"]);
