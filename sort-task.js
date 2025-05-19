/**
 * Sorts the task list based on the selected sorting option,
 * then updates the task table with the sorted data.
 */

function sortTasks() {
  const sortOption = document.getElementById("sortOption").value;
  const tasks = getAllTasks();
  tasks.sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "tags") {
      return a.tags.localeCompare(b.tags);
    } else if (sortOption === "status") {
      return a.status.localeCompare(b.status);
    } else if (sortOption === "deadline") {
      return new Date(a.deadline) - new Date(b.deadline);
    }
  });
  updateTable(tasks);
}
