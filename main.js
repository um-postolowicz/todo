const addBtn = document.querySelector(".add_task_btn");
const input = document.querySelector(".input");
const tasksList = document.querySelector(".tasks");

const buttons = [
  {
    name: "editBtn",
    text: "Edit task",
  },
  {
    name: "doneBtn",
    text: "Mark as done",
  },
  {
    name: "deleteBtn",
    text: "Delete task",
  },
];
const tasks = [];
let index = 0;

const taskButtons = (task) => {
  // const deleteBtn = document.createElement("button");
  // const doneBtn = document.createElement("button");
  // const editBtn = document.createElement("button");
  // deleteBtn.classList.add("deleteBtn");
  // doneBtn.classList.add("doneBtn");
  // editBtn.classList.add("editBtn");
  // deleteBtn.textContent = "Delete task";
  // doneBtn.textContent = "Mark as done";
  // editBtn.textContent = "Edit task";
  // task.appendChild(deleteBtn);
  // task.appendChild(doneBtn);
  // task.appendChild(editBtn);
  for (i = 0; i < buttons.length; i++) {
    const button = document.createElement("button");
    button.classList.add(`${buttons[i].name}`);
    button.textContent = `${buttons[i].text}`;
    task.appendChild(button);
  }
};

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
  taskButtons(task);
  input.value = "";
};

addBtn.addEventListener("click", addTask);
