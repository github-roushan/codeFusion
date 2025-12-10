// function printDouble(msg: string) {
//     console.log(msg);
//     console.log(msg);
// }

// printDouble("Hello World");
// const btn = document.getElementById("btn");
// console.log(btn);

// // ? is called optional chaining operator
// btn?.addEventListener("click", () => {
//     console.log("Button Clicked");
// });

// // we can also use the non null assertion operator
// const btn_sure = document.getElementById("btn")!;
// btn_sure.addEventListener("click", () => {
//     console.log("Button Sure Clicked");
// });

// // Type Assertion
// let mystery: unknown = "Hello World!!";
// const numChars = (mystery as string).length;

const todoInput = document.getElementById("todoinput")! as HTMLInputElement;
const todoButton = document.getElementById("btn")! as HTMLButtonElement;
// other way to do Assertion is
// (<HTMLButtonElement>todoButton).addEventListener("click", () => {});

// todoButton.addEventListener("click", () => {
//     const val = todoInput.value;
//     todoInput.value = "";
//     console.log(val);
// });
const form = document.querySelector("form");

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = loadTodos();
todos.forEach(createListTodo);

function loadTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON);
}

function handleSubmitForm(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: todoInput.value,
        completed: false,
    }
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    createListTodo(newTodo);
    todoInput.value = "";
}

function createListTodo(todo: Todo) {
    const ul = document.getElementById("todolist")!;
    const li = document.createElement("li");
    li.textContent = todo.text;

    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    });
    checkbox.type = "checkbox";
    li.append(checkbox);
    ul.appendChild(li);
}

form?.addEventListener("submit", handleSubmitForm);