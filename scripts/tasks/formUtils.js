/**
 * Resets the "Add New Task" form back to the default values.
 *
 * - Clears the title input
 * - Clears the description input
 * - Sets the status dropdown back to "todo"
 * - Sets the priority dropdown back to "medium"
 *
 * @returns {void}
 */
export function resetForm() {
  document.getElementById("title-input").value = "";
  document.getElementById("desc-input").value = "";
  document.getElementById("select-status").value = "todo";
  document.getElementById("select-priority").value = "medium";
}
