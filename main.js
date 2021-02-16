const addBtn = document.querySelector(".add_task_btn");
const checkbox = document.querySelector(".checkbox");
const doneTasksList = document.querySelector(".done_tasks");
const input = document.querySelector(".input");
const tasksList = document.querySelector(".tasks");

setTimeout(() => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    "height=" + height + "px, width=" + width + "px, initial-scale=1.0"
  );
}, 300);

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

const clearAndShowList = (list, table) => {
  list.textContent = "";
  table.forEach((onetask, index) => {
    onetask.id = index;
    list.appendChild(onetask);
  });
};

const editTask = (e, task) => {
  e.preventDefault();
  e.target.parentNode.innerHTML =
    "<input type='text' class='input_edit' placeholder='Edit task'> <button class='button_edit'>Accept</button>";
  const editInput = document.querySelector(".input_edit");
  document.querySelector(".button_edit").addEventListener("click", () => {
    if (editInput.value === "") return;
    task.textContent = editInput.value;
    taskButtons(task);
  });
};

const markTaskAsDone = (e) => {
  const index = e.target.parentNode.id;
  const doneTask = tasks.splice(index, 1)[0];
  const newDoneTask = document.createElement("li");
  console.log(doneTask);
  newDoneTask.innerHTML =
    doneTask.firstChild.data +
    "<button class='deleteBtn_done'>Delete task</button>";
  newDoneTask.classList.remove("task");
  newDoneTask.classList.add("done_task");
  doneTasks.push(newDoneTask);
  clearAndShowList(doneTasksList, doneTasks);
  doneTasksList.appendChild(newDoneTask);
  clearAndShowList(tasksList, tasks);
  document
    .querySelector(".deleteBtn_done")
    .addEventListener("click", deleteTask);
};

const deleteTask = (e) => {
  if (e.target.className === "deleteBtn") {
    e.target.parentNode.remove();
    const index = e.target.parentNode.id;
    tasks.splice(index, 1);
    clearAndShowList(tasksList, tasks);
  } else if (e.target.className === "deleteBtn_done") {
    e.target.parentNode.remove();
    const index = e.target.parentNode.id;
    doneTasks.splice(index, 1);
    clearAndShowList(doneTasksList, doneTasks);
  }
};

const taskButtons = (task) => {
  for (i = 0; i < buttons.length; i++) {
    const button = document.createElement("button");
    button.classList.add(`${buttons[i].name}`);
    button.textContent = `${buttons[i].text}`;
    task.appendChild(button);
    button.addEventListener("click", (e) => {
      if (button.className === "editBtn") {
        editTask(e, task);
      } else if (button.className === "doneBtn") {
        markTaskAsDone(e);
      } else if (button.className === "deleteBtn") {
        deleteTask(e);
      }
    });
  }
};

const addTask = (e) => {
  e.preventDefault();
  const newTask = input.value;
  if (newTask === "") return;
  const task = document.createElement("li");
  task.textContent = newTask;
  task.classList.add("task");
  if (checkbox.checked) {
    task.classList.add("priority");
  }
  tasks.push(task);
  clearAndShowList(tasksList, tasks);
  tasksList.appendChild(task);
  taskButtons(task);
  input.value = "";
};

addBtn.addEventListener("click", addTask);
