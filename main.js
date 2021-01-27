const addBtn = document.querySelector(".add_task_btn");
const doneTasksList = document.querySelector(".done_tasks");
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
const doneTasks = [];

// let index = 0;

const editTask = () => {
  console.log("edit");
};

const markTaskAsDone = () => {
  console.log("done");
};

const deleteTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.id;
  tasks.splice(index, 1);
  tasksList.textContent = "";
  console.log(tasks);
  tasks.forEach((onetask, index) => {
    onetask.id = index;
    tasksList.appendChild(onetask);
  });
};

const taskButtons = (task) => {
  for (i = 0; i < buttons.length; i++) {
    const button = document.createElement("button");
    button.classList.add(`${buttons[i].name}`);
    button.textContent = `${buttons[i].text}`;
    task.appendChild(button);
    button.addEventListener("click", (e) => {
      if (button.className === "editBtn") {
        editTask();
      } else if (button.className === "doneBtn") {
        markTaskAsDone();
      } else if (button.className === "deleteBtn") {
        deleteTask(e);
      }
    });
  }
};

const addTask = (e) => {
  e.preventDefault();
  const newTask = input.value;
  const task = document.createElement("li");
  task.textContent = newTask;
  task.classList.add("task");
  // task.id = index;
  tasks.push(task);
  tasksList.textContent = "";
  tasks.forEach((onetask, index) => {
    onetask.id = index;
    tasksList.appendChild(onetask);
  });
  tasksList.appendChild(task);
  taskButtons(task);
  // index = index + 1;
  input.value = "";
};

addBtn.addEventListener("click", addTask);
