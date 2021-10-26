//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

const addTodo = (event) => {
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //LI

  const newTask = document.createElement("li");
  newTask.classList.add("todo-item");
  newTask.innerText = todoInput.value;
  todoDiv.appendChild(newTask);

  //LOCALSTORAGE
  saveLocalTodos(todoInput.value);

  //check btn
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add("complete-btn");
  todoDiv.appendChild(completeBtn);

  //trash btn
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  //append to ul

  if (todoInput.value.length == 0) return;
  todoList.appendChild(todoDiv);
  //Clear todo input value
  todoInput.value = "";
  todoInput.focus();
  console.log(filterOption.value);
};

const filterTodoList = () => {
  const todos = todoList.childNodes;

  todos.forEach((todo) => {
    switch (filterOption.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

const deleteCheck = (e) => {
  const item = e.target;

  //delete

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    //remove local storage
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", () => todo.remove());
  }

  //check

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    filterTodoList();
  }
};

function saveLocalTodos(todo) {
  //check if already have things in LS
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //LI

    const newTask = document.createElement("li");
    newTask.classList.add("todo-item");
    newTask.innerText = todo;
    todoDiv.appendChild(newTask);

    //check btn
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);

    //trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    //append to ul

    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex, 1));

  localStorage.setItem("todos", JSON.stringify(todos));
}

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodoList);
