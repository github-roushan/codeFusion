function printDouble(msg: string) {
    console.log(msg);
    console.log(msg);
}

printDouble("Hello World");
const btn = document.getElementById("btn");
console.log(btn);

btn?.addEventListener("click", () => {
    console.log("Button Clicked");
});