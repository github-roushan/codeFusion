function printDouble(msg: string) {
    console.log(msg);
    console.log(msg);
}

printDouble("Hello World");
const btn = document.getElementById("btn");
console.log(btn);

// ? is called optional chaining operator
btn?.addEventListener("click", () => {
    console.log("Button Clicked");
});

// we can also use the non null assertion operator
const btn_sure = document.getElementById("btn")!;
btn_sure.addEventListener("click", () => {
    console.log("Button Sure Clicked");
});

// Type Assertion
let mystery: unknown = "Hello World!!";
const numChars = (mystery as string).length;

const todoInput = document.getElementById("todoinput")! as HTMLInputElement;
const todoButton = document.getElementById("btn")! as HTMLButtonElement;

todoButton.addEventListener("click", () => {
    const val = todoInput.value;
    todoInput.value = "";
    console.log(val);
});