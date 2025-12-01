
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