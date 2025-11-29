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