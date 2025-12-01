
interface Person {
    readonly id: number;
    first: string;
    age?: number;
    last: string;
    nickname?: string;
}

const wishBirthday = (person: Person) => {
    console.log(`Happy Birthday ${person.first}! You are ${person.age} years old.`);
}

const person: Person = {
    id: 1,
    first: "John",
    last: "Doe",
    age: 21
};

const person2: Person = {
    id: 2,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom"
};

wishBirthday(person);