
interface Person {
    name: string;
    age: number;
}

const wishBirthday = (person: Person) => {
    console.log(`Happy Birthday ${person.name}! You are ${person.age} years old.`);
}

const person: Person = {
    name: "John",
    age: 21
}

wishBirthday(person);