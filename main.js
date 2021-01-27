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

const editTask = (e, task) => {
  e.preventDefault();
  e.target.parentNode.innerHTML =
    "<input type='text' class='input_edit'> <button class='button_edit'>Accept</button>";
  const editInput = document.querySelector(".input_edit");
  document.querySelector(".button_edit").addEventListener("click", () => {
    task.textContent = editInput.value;
    taskButtons(task);
  });
};

const markTaskAsDone = (e) => {
  const index = e.target.parentNode.id;
  const doneTask = tasks.splice(index, 1)[0];
  const newDoneTask = document.createElement("li");
  newDoneTask.textContent = doneTask.textContent;
  newDoneTask.classList.remove("task");
  newDoneTask.classList.add("done_task");
  doneTasks.push(newDoneTask);
  doneTasksList.textContent = "";
  doneTasks.forEach((onetask, index) => {
    onetask.id = index;
    doneTasksList.appendChild(onetask);
  });
  doneTasksList.appendChild(newDoneTask);
  tasksList.textContent = "";
  tasks.forEach((onetask, index) => {
    onetask.id = index;
    tasksList.appendChild(onetask);
  });
};

const deleteTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.id;
  tasks.splice(index, 1);
  tasksList.textContent = "";
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
  const task = document.createElement("li");
  task.textContent = newTask;
  task.classList.add("task");
  tasks.push(task);
  tasksList.textContent = "";
  tasks.forEach((onetask, index) => {
    onetask.id = index;
    tasksList.appendChild(onetask);
  });
  tasksList.appendChild(task);
  taskButtons(task);
  input.value = "";
};

addBtn.addEventListener("click", addTask);
