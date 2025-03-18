const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const taskTypeSelect = document.querySelector("#task-type");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  const selectedType = taskTypeSelect.value;

  if (todoText.length === 0) {
    alert("Enter Task");
    return;
  }

  if (todoText.length > 50) {
    alert("There must be less than 50 characters");
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    type: selectedType,
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
    const todoType = document.createElement("span");
    const deleteButton = document.createElement("button");
    const checkboxImage = document.createElement("img");

    todoText.textContent = todo.text;
    todoType.textContent = ` [${todo.type}]`;
    todoType.style.marginLeft = "10px";
    todoType.style.fontStyle = "italic";
    todoType.style.color = "#bbbbbb";

    checkboxImage.src = todo.completed ? "shupo2.gif" : "shupogaki.gif";
    checkboxImage.alt = "Checkbox";
    checkboxImage.style.width = "20px";
    checkboxImage.style.height = "20px";
    checkboxImage.style.cursor = "pointer";
    checkboxImage.style.marginRight = "10px";

    checkboxImage.addEventListener("click", () => {
      toggleCompleted(todo.id);
    });

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "gray";
    } else {
      todoText.style.textDecoration = "none";
      todoText.style.color = "white";
    }

    todoItem.appendChild(checkboxImage);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoType);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodo();
