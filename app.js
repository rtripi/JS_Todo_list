//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-listt");

const addTodo = (event) => {
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  console.log("alou");
};

// Event Listeners

todoButton.addEventListener("click", addTodo);
