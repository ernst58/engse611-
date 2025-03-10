const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText.length === 0) {
    alert("Eneter Task");
    return;
  }
  
  if (todoText.length > 50) {
    alert("There must be less than 50 character");
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todo);
  todoInput.value = "";
  renderTodo();
}

function deleteTodo(id) {
  const confirmDelete = confirm("Do you want to delete this task?");
  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodo();
}

function renderTodo() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const todoCheckbox = document.createElement("input");

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.completed;

    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));
    todoCheckbox.addEventListener("change", () => toggleCompleted(todo.id));

    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "gray";
    } else {
      todoText.style.textDecoration = "none";
      todoText.style.color = "black";
    }

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodo();