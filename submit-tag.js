/**
 * Creates new tag.
 */

function submitTag() {
  const tagPopUp = document.getElementById("tagCreatonPopUp");
  const name = document.getElementById("name");
  const tagSubmitError = document.getElementById("tagSubmitError");
  const template = document.getElementById("tagLi");
  const tagsList = document.getElementById("tagsList");
  let i = 0;
  let isNewOptionAdded = 0;

  if (name.value != "") {
    while (i < tagId || tagId != 0) {
      if (JSON.parse(localStorage.getItem(i + "tag")).value == name.value) {
        tagSubmitError.innerText = "Tag exists!";
      } else {
        const tagSelect = document.getElementById("tag-select");
        const option = new Option(name.value, name.value);
        const clone = template.content.cloneNode(true);
        const p = clone.querySelectorAll("p");
        const bin = clone.querySelectorAll("button");
        tagsList.appendChild(clone);
        p[0].textContent = name.value;
        p[0].onclick = tagId + "option";
        bin[0].id = tagId + "tagBin";
        bin[0].attributes.onclick.value = "tagDelete(" + tagId + ")";
        localStorage.setItem(tagId + "tag", JSON.stringify(option));
        option.id = "option" + tagId;
        tagSelect.appendChild(option);
        submitError.innerText = "Successful!";
        tagPopUp.close();
        console.log(option);
        isNewOptionAdded = 1;
        break;
      }
    }

    if (tagId == 0) {
      const tagSelect = document.getElementById("tag-select");
      const option = new Option(name.value, name.value);
      const clone = template.content.cloneNode(true);
      const p = clone.querySelectorAll("p");
      const bin = clone.querySelectorAll("button");
      tagsList.appendChild(clone);
      p[0].textContent = name.value;
      p[0].onclick = tagId + "option";
      bin[0].id = tagId + "tagBin";
      bin[0].attributes.onclick.value = "tagDelete(" + tagId + ")";
      localStorage.setItem(tagId + "tag", JSON.stringify(option));
      option.id = "option" + tagId;
      tagId = tagId + 1;
      tagSelect.appendChild(option);
      submitError.innerText = "Successful!";
      tagPopUp.close();
      console.log(option);
    }
  } else {
    tagSubmitError.innerText = "Name must be!";
  }
  if (isNewOptionAdded) {
    tagId = tagId + 1;
  }
}
