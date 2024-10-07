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
  if (
    clicked.classList.contains("delete-btn") &&
    confirm("¿Está seguro que desea eliminar esta tarea?")
  ) {
    clicked.parentElement.remove();
  } else if (clicked.classList.contains("edit-btn")) {
    const newTask = prompt("Por favor, ingrese la nueva tarea");
    if (newTask.trim()) {
      clicked.parentElement.firstChild.textContent = newTask;
    }
  }
});
