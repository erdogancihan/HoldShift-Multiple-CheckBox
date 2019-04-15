const checkBoxes = document.querySelectorAll(".inbox input");
//console.log(checkBoxes);

let lastChecked;

function handleCheck(e) {
  //console.log(e)
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkBoxes.forEach(checkBox => {
      if (checkBox === this || checkBox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkBox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkBoxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleCheck);
});
