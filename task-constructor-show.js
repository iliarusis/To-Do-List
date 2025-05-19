/**
 * Shows task creation dialog element.
 */

function taskConstructorShow() {
  const submitError = document.getElementById("submitError");
  const PopUp = document.getElementById("creatonPopUp");
  PopUp.showModal();
  submitError.innerText = "";
}
