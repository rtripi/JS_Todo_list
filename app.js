//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

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
};

const deleteCheck = (e) => {
  const item = e.target;

  //delete

  if (item.classList[0] === "trash-btn") {
  }
};

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
