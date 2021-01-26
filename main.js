const addBtn = document.querySelector(".add_task_btn");
const doneTasks = document.querySelector(".done_tasks");
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

const editTask = () => {
  console.log("edit");
};

const markTaskAsDone = () => {
  console.log("done");
};

const deleteTask = () => {
  console.log("delete");
};

const taskButtons = (task) => {
  for (i = 0; i < buttons.length; i++) {
    const button = document.createElement("button");
    button.classList.add(`${buttons[i].name}`);
    button.textContent = `${buttons[i].text}`;
    task.appendChild(button);
    button.addEventListener("click", () => {
      if (button.className === "editBtn") {
        editTask();
      } else if (button.className === "doneBtn") {
        markTaskAsDone();
      } else if (button.className === "deleteBtn") {
        deleteTask();
      }
    });
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
