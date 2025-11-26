import { createTaskElement } from "./taskElement.js";

// sorting of task priority

const priotiyRank = { high: 0, medium: 1, low: 2,};

function comparePriority(a, b) {
  const pa = priotiyRank[(a.priority || "medium").toLowerCase()];
  const pb = priotiyRank[(b.priority || "medium").toLowerCase()];
  return (pa - pb) || (a.id - b.id);
}


/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks(tasks) {
  const statuses = ["todo", "doing", "done"];

  statuses.forEach((status) => {
    const container = getTaskContainerByStatus(status);
    if (!container) 
      return;

    const columnTasks = tasks
      .filter((task) => task.status === status)
      .sort(comparePriority);

    columnTasks.forEach((task) => {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    });
  });
}
