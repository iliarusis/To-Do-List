/**
 * Returns all tasks on function call.
 */

function getAllTasks() {
  const tasks = [];
  let i = 1;
  while (true) {
    const task = JSON.parse(localStorage.getItem(i + "task"));
    if (!task) break;
    tasks.push(task);
    i++;
  }
  return tasks;
}
