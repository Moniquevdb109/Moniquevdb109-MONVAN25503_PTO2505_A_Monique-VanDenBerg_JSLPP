import { openTaskModal } from "./modalHandlers.js";

/**
 * Creates a task card (a task "div") that shows the task title and priority dot.
 *
 * What it does:
 * - Builds a <div> for the task card
 * - Adds the task title as text
 * - Adds a colored priority dot (high / medium / low)
 * - Stores the task id on the element using `dataset.taskId`
 * - When the user clicks the card, it opens the task modal for editing/viewing
 *
 * @param {Object} task - A task object from storage.
 * @param {number} task.id - The task's unique id.
 * @param {string} task.title - The task title.
 * @param {string} [task.priority] - The task priority ("high", "medium", "low"). Defaults to "medium".
 * @returns {HTMLDivElement} The task card element ready to be added to the DOM.
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;   
  taskDiv.dataset.taskId = task.id;

  // Make sure priority always has a value and is lowercase
  const priority = (task.priority ?? "medium").toLowerCase();

  // Create the colored dot that shows the priority level
  const priorityDot = document.createElement("span");
  priorityDot.className = `priority-dot priority-${priority}`;
  priorityDot.title = `Priority: ${priority}`;

  taskDiv.appendChild(priorityDot);

  // Clicking the card opens the task modal for this task
  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

