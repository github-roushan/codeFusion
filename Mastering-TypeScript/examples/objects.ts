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