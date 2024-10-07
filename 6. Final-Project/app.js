const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;

  if (task.trim()) {
    taskList.append(createTask(task));
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
    item.remove();
  }
}

function editTask(item) {
  const newTask = prompt(
    "Por favor, ingrese la nueva tarea",
    item.firstChild.textContent
  );
  if (newTask.trim()) {
    item.firstChild.textContent = newTask;
  }
}
