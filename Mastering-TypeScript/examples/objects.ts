const person: object = {
    name: "Elton",
    age: 25,
    isMonster: true
}

function printName(person: { first: string, last: string }) {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Roushan", last: "Singh" });


let coordinates: { x: number, y: number } = { x: 10, y: 20 };

function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() };
}

console.log(randomCoordinate());

// we can pass additonal parameters as part of the object using a declaration but not directly
//  as long as we pass both first and last
const singer = { first: "Much", last: "Needed", age: 25, isAlive: true };
printName(singer);

// The below fails due to missing last
// const singer = { first: "Much", age: 25, isAlive: true };
// printName(singer)

// Below Fails as it complains to specify only known parameters
// printName({ first: "Much", last: "Needed", age: 25, isAlive: true });

type Coord = {
    x: number;
    y: number;
};

function doublePoint(point: Coord): Coord {
    return { x: 2 * point.x, y: 2 * point.y }
}

// Optional Properties
type Point = {
    x: number;
    y: number;
    z?: number;
};

const myPoint: Point = { x: 0, y: 0 };
console.log(myPoint);

// Read Only Properties
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 9973,
    username: "roushanksingh"
};

console.log(user);
// below is illegal
// user.id = 12;


// Example of Intersection Types
type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

// Intersection Type (Bring properties from both the types)
// Show error if there is one key with different type in each of the Types
// if key has same type no problem. Key is brought here one time
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
};

console.log(happyFace);

type Cat = {
    numLives: number;
};
type Dog = {
    breed: string;
};
// add additional properties
type CatDog = Cat & Dog & { age: number };

const newBreed = {
    numLives: 7,
    breed: "Husky",
    age: 9
};

console.log(newBreed);