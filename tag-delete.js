/**
 * Deletes specific tag by its id.
 */

function tagDelete(tagid) {
  const bin = document.getElementById(tagid + "tagBin");
  const tagSelect = document.getElementById("tag-select");
  const option = document.getElementById("option" + tagid);
  bin.parentElement.remove();
  option.remove();
}
