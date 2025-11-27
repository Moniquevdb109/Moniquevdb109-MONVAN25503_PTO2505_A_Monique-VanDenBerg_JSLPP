import { createTaskElement } from "./taskElement.js";

/**
 * Priority order used for sorting tasks inside each column.
 * Lower number = higher priority (shows closer to the top).
 *
 * @type {{ high: number, medium: number, low: number }}
 */
const priotiyRank = { high: 0, medium: 1, low: 2,};

/**
 * Compares two tasks so we can sort them by priority.
 *
 * Rules:
 * 1) High goes above Medium, Medium goes above Low
 * 2) If priority is the same, sort by id (older tasks first)
 *
 * @param {Object} a - First task to compare.
 * @param {Object} b - Second task to compare.
 * @returns {number} A number used by `.sort()`:
 * - negative => a comes before b
 * - positive => b comes before a
 * - 0 => same order
 */
function comparePriority(a, b) {
  const pa = priotiyRank[(a.priority || "medium").toLowerCase()];
  const pb = priotiyRank[(b.priority || "medium").toLowerCase()];
  return (pa - pb) || (a.id - b.id);
}


/**
 * Finds the correct task container element for a given status.
 * Example statuses: "todo", "doing", "done"
 *
 * @param {string} status - The status/column name.
 * @returns {HTMLElement|null} The element that holds tasks for that column,
 * or null if the column is not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all tasks currently shown on the board.
 * This is used before re-rendering so we don't duplicate tasks on screen.
 *
 * @returns {void}
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks into the correct status columns.
 *
 * Steps:
 * 1) Loop through each status column (todo/doing/done)
 * 2) Filter tasks for that column
 * 3) Sort them by priority (High -> Medium -> Low)
 * 4) Create a task card element and add it to the column
 *
 * @param {Array<Object>} tasks - The full list of tasks to display.
 * @returns {void}
 */
export function renderTasks(tasks) {
  const statuses = ["todo", "doing", "done"];

  statuses.forEach((status) => {
    const container = getTaskContainerByStatus(status);
    if (!container) 
      return;

    const columnTasks = tasks
      .filter((task) => task.status === status) // filters through each task for each column
      .sort(comparePriority); // sort = built in array method

    columnTasks.forEach((task) => {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    });
  });
}
