function square(num: number) {
    return num * num;
}

function greet(person: string) {
    return `Hello ${person}`;
}
console.log(greet("Roushan"));
console.log(square(2));

const add = (a: number, b: number) => {
    return a + b;
}
console.log(add(2, 3));

const doSomething = (person: string, age: number) => {
    console.log("Doing something");
}

doSomething("FunnyFace", 20);
