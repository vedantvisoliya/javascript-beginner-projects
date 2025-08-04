const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

function createTodo(task) {
    let todo = document.createElement("div");
    let textElem = document.createElement("span");

    textElem.innerHTML = task;

    todo.appendChild(textElem);

    let closeElem = document.createElement("span");
    closeElem.innerHTML = "&times;";
    closeElem.classList.add("delete");

    closeElem.addEventListener("click", () => {
        todos.removeChild(todo);
    });

    todo.appendChild(closeElem);
    todo.classList.add("todo");
    return todo;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let value = input.value;
    if (!value.trim()) {
        return;
    }
    todos.appendChild(createTodo(value));
    input.value = "";
});