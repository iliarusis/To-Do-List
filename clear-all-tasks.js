/**
 * Deletes all tasks on function call.
 */

function clearAllTasks() {
  const tbody = document.querySelector("tbody");
  localStorage.clear();
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}
