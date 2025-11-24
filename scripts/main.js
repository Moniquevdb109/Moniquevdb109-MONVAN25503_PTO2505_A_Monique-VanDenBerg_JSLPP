import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
  setupDeleteTaskHandler,
  setupConfirmDeleteHandler,
  setupEditTaskHandler
} from "./ui/modalHandlers.js";
import { setupSidebarDesktopUI, setupSidebarMobileUI } from "./ui/sidebarUI.js";
import { setupThemeToggleUI } from "./ui/themeUI.js";

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
  setupSidebarMobileUI();
  setupThemeToggleUI();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
