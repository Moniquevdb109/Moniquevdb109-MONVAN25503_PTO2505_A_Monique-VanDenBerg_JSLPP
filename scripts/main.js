import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
  setupDeleteTaskHandler,
  setupConfirmDeleteHandler,
  setupEditTaskHandler
} from "./ui/modalHandlers.js";
import { setupSidebarDesktopUI } from "./ui/sidebarUI.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupDeleteTaskHandler();
  setupConfirmDeleteHandler();
  setupEditTaskHandler();
  setupSidebarDesktopUI();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
