const addBtn = document.querySelector(".add_task_btn");
const input = document.querySelector(".input");
const tasksList = document.querySelector(".tasks");

const tasks = ["Do the laundry", "Walk the dog", "Study math"];

for (i = 0; i < tasks.length; i++) {
  const task = document.createElement("li");
  task.textContent = tasks[i];
  task.classList.add("task");
  task.id = i;
  tasksList.appendChild(task);
}

const addTask = (e) => {
  e.preventDefault();
  const newTask = input.value;
  tasks.push(newTask);
  const task = document.createElement("li");
  task.textContent = newTask;
  task.classList.add("task");
  task.id = i;
  tasksList.appendChild(task);
  input.value = "";
};

addBtn.addEventListener("click", addTask);
