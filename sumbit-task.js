/**
 * Creates new Task, than updates the tasks table with new data.
 */

function submitTask() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const deadline = document.getElementById("deadline");
  const tags = document.getElementById("tag-select");
  const status = document.getElementById("status");
  const submitError = document.getElementById("submitError");
  const PopUp = document.getElementById("creatonPopUp");
  const runLog = new Date(Date.now());
  const createdAt = runLog;
  const updatedAt = runLog;
  if (title.value != "" && tags.value != "") {
    const NewTask = new Task(
      num,
      title.value,
      description.value,
      deadline.value,
      tags.value,
      status.value,
      createdAt,
      updatedAt
    );
    i = 1;
    while (i <= num) {
      const localStorageTask = JSON.parse(localStorage.getItem(i + "task"));
      if (localStorageTask.title == NewTask.title) {
        submitError.innerText = "Task exists!";
        var similar = 1;
        break;
      }
      i = i + 1;
    }
    if (!similar) {
      num = num + 1;
      submitError.innerText = "Successful!";
      PopUp.close();
      console.log(NewTask);
      localStorage.setItem(num + "task", JSON.stringify(NewTask));
    }
  } else if (title.value != "") {
    submitError.innerText = "Tags must be!";
  } else {
    submitError.innerText = "Title must be!";
  }
  updateTable(getAllTasks());
}
