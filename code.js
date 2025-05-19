/**
 * Clears local storage, creates counters and declares Task object.
 */

localStorage.clear();
var num = 0;
var tagId = 0;

function Task(
  id,
  title,
  description,
  deadline,
  tags,
  status,
  createdAt,
  updatedAt
) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.deadline = deadline;
  this.tags = tags;
  this.status = status;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
}
