import { openTaskModal } from "./modalHandlers.js";

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.dataset.taskId = task.id;

  const titleEl = document.createElement("p");
  titleEl.className = "task-title";
  titleEl.textContent = task.title;

  const priorityEl = document.createElement("span");
  priorityEl.className = `priority-badge priority-${task.priority || "medium"}`;
  priorityEl.textContent = task.priority || "medium";

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  taskDiv.appendChild(titleEl);
  taskDiv.appendChild(priorityEl);

  return taskDiv;
}

