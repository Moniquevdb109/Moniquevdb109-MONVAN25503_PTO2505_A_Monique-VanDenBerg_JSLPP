import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
  setupDeleteTaskHandler,
  setupConfirmDeleteHandler
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupDeleteTaskHandler();
  setupConfirmDeleteHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
