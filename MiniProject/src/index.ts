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