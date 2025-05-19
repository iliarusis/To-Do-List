/**
 * Deletes all tags on function call.
 */

function clearAllTags() {
  const tagSelect = document.querySelector("tag-select");
  localStorage.clear();
  while (tagSelect.firstChild) {
    tagSelect.removeChild(tagSelect.firstChild);
  }
}
