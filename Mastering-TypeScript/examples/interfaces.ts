
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

interface IProduct {
    name: string,
    price: number,
    applyDiscount(discount: number): number
};

const shoes: IProduct = {
    name: "Nike",
    price: 100,
    applyDiscount(discount: number) {
        return this.price * (1 - discount);
    }
};

const discountedPrice = shoes.applyDiscount(0.3);
console.log(discountedPrice);

//Interface Reopening
interface IDog {
    name: string;
    age: number;
}

// We can add more properties in above interface as below
// This doesn't create a new interface, it just extends the above interface
interface IDog {
    breed: string;
    bark(): string;
}

const elton: IDog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian",
    bark() {
        return "Bark";
    }
}

// extending interfaces
interface ServiceDog extends IDog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark() {
        return "Bark HArd";
    },
    job: "guide dog"
};


// Multiple Inheritance
interface IWorker {
    name: string,
};

interface Employee {
    readonly id: number,
    email: string
};

interface Engineer extends IWorker, Employee {
    level: string,
    languages: string[]
}

const engineer: Engineer = {
    name: "John",
    id: 1,
    email: "john@doe.com",
    level: "senior",
    languages: ["TypeScript", "JavaScript"]
}

// difference between interfaces and type aliases
// interfaces are used to describe objects while type alias can describe things like "apple" | "ball"
// interfaces can be reopned and types cannot
// interfaces can be extended but types need to be intersection types