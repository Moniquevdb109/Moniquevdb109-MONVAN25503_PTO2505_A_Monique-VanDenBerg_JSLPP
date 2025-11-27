import { addNewTask, deleteTask, editTask } from "../tasks/taskManager.js";

/**
 * Sets up the close (X) button for the task details modal.
 * When the user clicks the close button, the modal closes.
 *
 * @returns {void}
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");length
  closeBtn.addEventListener("click", () => modal.close());
}

/**
 * Sets up the "Add New Task" button to open the new-task modal,
 * and sets up the cancel + submit behavior for that modal form.
 *
 * - Clicking "Add New Task" opens the modal overlay
 * - Clicking "Cancel" closes it
 * - Submitting the form calls `addNewTask()` if the form is valid
 *
 * @returns {void}
 */
export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

/**
 * Opens the task modal so the user can view/edit a specific task.
 *
 * It:
 * - stores the task id inside the modal using `modal.dataset.taskId`
 * - fills the form inputs with that task's current values
 * - opens the modal
 *
 * @param {Object} task - The task object to display in the modal.
 * @returns {void}
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");

  modal.dataset.taskId = task.id;

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  document.getElementById("task-priority").value = (task.priority || "medium").toLowerCase();
  modal.showModal();
}

/**
 * Sets up the "Delete" button inside the task modal.
 *
 * When clicked:
 * - reads the currently-open task id from `task-modal.dataset.taskId`
 * - saves that id onto the confirm-delete modal
 * - opens the confirm-delete modal
 *
 * @returns {void}
 */

export function setupDeleteTaskHandler() {
  const deleteBtn = document.getElementById("delete-task-btn");
  deleteBtn.addEventListener("click", () => {
    const modal = document.getElementById("task-modal");
    const taskId = parseInt(modal.dataset.taskId, 10);

    const confirmModal = document.getElementById("confirm-delete-modal");
    confirmModal.dataset.taskId = taskId;
    confirmModal.showModal();
  });
}

/**
 * Sets up the confirm-delete modal buttons ("Delete" and "Cancel").
 *
 * - Clicking confirm deletes the task from storage and closes both modals
 * - Clicking cancel only closes the confirm modal
 *
 * @returns {void}
 */
export function setupConfirmDeleteHandler() {
  const confirmModal = document.getElementById("confirm-delete-modal");
  const confirmBtn = document.getElementById("confirm-delete-btn");
  const cancelBtn = document.getElementById("cancel-delete-btn");

  confirmBtn.addEventListener("click", () => {
    const taskId = parseInt(confirmModal.dataset.taskId, 10);
    deleteTask(taskId);
    confirmModal.close();

    const taskModal = document.getElementById("task-modal");
    taskModal.close();
  });

  cancelBtn.addEventListener("click", () => confirmModal.close());
} 


/**
 * Sets up the save/edit behavior for the task modal form.
 *
 * When the form is submitted:
 * - prevents the page refresh
 * - reads the task id from `task-modal.dataset.taskId`
 * - collects updated form values into `updatedData`
 * - calls `editTask(taskId, updatedData)` to save + re-render
 * - closes the modal
 *
 * @returns {void}
 */
export function setupEditTaskHandler() {
  const form = document.getElementById("task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const modal = document.getElementById("task-modal");
    const taskId = Number(modal.dataset.taskId);
    
    const updatedData = {
      title: document.getElementById("task-title").value.trim(),
      description: document.getElementById("task-desc").value.trim(),
      status: document.getElementById("task-status").value,
      priority: document.getElementById("task-priority").value.toLowerCase(),
    };

    editTask(taskId, updatedData);
    modal.close();
  });
} 

