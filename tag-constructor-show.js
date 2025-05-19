/**
 * Shows tag creation dialog element.
 */

function tagConstructorShow() {
  const tagSubmitError = document.getElementById("tagSubmitError");
  const tagPopUp = document.getElementById("tagCreatonPopUp");
  tagPopUp.showModal();
  tagSubmitError.innerText = "";
}
