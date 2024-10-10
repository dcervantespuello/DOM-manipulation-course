const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

loadTasks();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;

  if (task.trim()) {
    taskList.append(createTask(task));
    storeTaskInLocalStorage(task);
    taskInput.value = "";
  }
});

function createTask(task) {
  const item = document.createElement("li");
  item.textContent = task;
  item.append(addButton(" ❌", "delete-btn"), addButton(" ✏️", "edit-btn"));
  return item;
}

function addButton(content, className) {
  const button = document.createElement("span");
  button.textContent = content;
  button.className = className;
  return button;
}

taskList.addEventListener("click", (event) => {
  const clicked = event.target;
  if (clicked.classList.contains("delete-btn")) {
    deleteTask(clicked.parentElement);
  } else if (clicked.classList.contains("edit-btn")) {
    editTask(clicked.parentElement);
  }
});

function deleteTask(item) {
  if (confirm("¿Está seguro que desea eliminar esta tarea?")) {
    const task = item.firstChild.textContent;
    deleteTaskInLocalStorage(task);
    item.remove();
  }
}

function editTask(item) {
  const oldTask = item.firstChild.textContent;
  const newTask = prompt(
    "Por favor, ingrese la nueva tarea",
    item.firstChild.textContent
  );
  if (newTask !== null && newTask.trim()) {
    item.firstChild.textContent = newTask;
    editTaskInLocalStorage(oldTask, newTask);
  }
}

function storeTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    taskList.append(createTask(task));
  });
}

function deleteTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.indexOf(task);

  if (index !== -1) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function editTaskInLocalStorage(oldTask, newTask) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.indexOf(oldTask);

  if (index !== -1) {
    tasks[index] = newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

const themeButton = document.getElementById("theme-toggle");
const body = document.querySelector("body");

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const theme = body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}
