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
