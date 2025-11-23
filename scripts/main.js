import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
  setupDeleteTaskHandler,
  setupConfirmDeleteHandler,
  setupEditTaskHandler
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupDeleteTaskHandler();
  setupConfirmDeleteHandler();
  setupEditTaskHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
