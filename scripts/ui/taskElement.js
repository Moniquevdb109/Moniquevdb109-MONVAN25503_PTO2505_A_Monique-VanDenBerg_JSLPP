import { openTaskModal } from "./modalHandlers.js";

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;   
  taskDiv.dataset.taskId = task.id;

  const priority = (task.priority ?? "medium").toLowerCase();

  const priorityDot = document.createElement("span");
  priorityDot.className = `priority-dot priority-${priority}`;
  priorityDot.title = `Priority: ${priority}`;
  // priorityDot.setAttribute("aria-label", `Priority: ${priority}`);

  taskDiv.appendChild(priorityDot);

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

