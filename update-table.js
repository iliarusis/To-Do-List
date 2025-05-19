/**
 * Updates data shown on the task table to the latest given data.
 */

function updateTable(tasks) {
  const template = document.getElementById("productrow");
  const tbody = document.querySelector("tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  var i = 1;
  tasks.forEach((task) => {
    const clone = template.content.cloneNode(true);
    td = clone.querySelectorAll("td");
    td[0].textContent = task.title;
    td[1].textContent = task.description;
    td[2].textContent = task.deadline;
    td[3].textContent = task.tags;
    td[4].textContent = task.status;
    td[0].id = "titleColumn" + i;
    td[3].id = "tagsColumn" + i;
    tbody.appendChild(clone);
    const titleColumn = document.getElementById("titleColumn" + i);
    const statusColumn = document.getElementById("tagsColumn" + i);
    const taskRow = titleColumn.parentElement;
    if (i == num) {
      titleColumn.id = "titleColumnLast";
      statusColumn.id = "tagsColumnLast";
      if (i == 1) {
        titleColumn.id = "titleColumnSingle";
        statusColumn.id = "tagsColumnSingle";
      }
    }
    if (i % 2 == 0) {
      taskRow.id = "firstColorTaskRow";
    } else {
      taskRow.id = "secondColorTaskRow";
    }
    i = i + 1;
  });
}
