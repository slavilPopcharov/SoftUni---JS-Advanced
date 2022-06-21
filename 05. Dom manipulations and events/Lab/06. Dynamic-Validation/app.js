function validate() {
  let input = document.getElementById("email");
  input.addEventListener("change", onChange);
  let regExp = /\b([a-z]+)\b@([a-z]+)\b.([a-z]+)\b/g;

  function onChange() {
    if (input.value.match(regExp) || input.value == '') {
      input.value = "";
      input.classList.remove("error")
    } else {
      input.classList.add("error");
    }
  }
}
