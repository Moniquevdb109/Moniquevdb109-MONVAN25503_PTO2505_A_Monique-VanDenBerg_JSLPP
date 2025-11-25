import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

// Add new tasks
export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");
  const proiority = document.getElementById("select-priority").value;

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

// Edit existing tasks
export function editTask(taskId, updatedData) {
  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedData } : task
  );
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
}


// Delete tasks by ID
export function deleteTask(taskId) {
  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
}



