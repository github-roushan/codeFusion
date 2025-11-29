const person: object = {
    name: "Elton",
    age: 25,
    isMonster: true
}

function printName(person: { first: string, last: string }) {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Roushan", last: "Singh" });
