const tasksList = document.querySelector(".tasks");

const tasks = [
  {
    id: 1,
    task: "Do the laundry",
  },
  {
    id: 2,
    task: "Walk the dog",
  },
  {
    id: 3,
    task: "Study math",
  },
];

for (i = 0; i < tasks.length; i++) {
  const task = document.createElement("li");
  task.textContent = tasks[i].task;
  tasksList.appendChild(task);
}

console.log(tasksList);
