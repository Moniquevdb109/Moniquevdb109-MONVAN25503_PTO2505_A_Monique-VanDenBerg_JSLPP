import { addNewTask, deleteTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");;length
  closeBtn.addEventListener("click", () => modal.close());
}

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

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");

  modal.dataset.taskId = task.id;

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  modal.showModal();
}

// Handler for deleting a task from the modal

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