const addBtn = document.querySelector(".add_task_btn");
const input = document.querySelector(".input");
const tasksList = document.querySelector(".tasks");

const tasks = [];
let index = 0;

const addTask = (e) => {
  index = index + 1;
  e.preventDefault();
  const newTask = input.value;
  tasks.push(newTask);
  const task = document.createElement("li");
  task.textContent = newTask;
  task.classList.add("task");
  task.id = index;
  tasksList.appendChild(task);
  input.value = "";
};

addBtn.addEventListener("click", addTask);
