function square(num: number): number {
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

const doSomething = (person: string = "Stranger") => {
    console.log(`${person} please Do something`);
}

doSomething("FunnyFace");

function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
console.log(rando(2));


function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}
printTwice("Hello");

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while (true) {
        console.log("Game is running");
    }
}