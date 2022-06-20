function focused() {
  [...document.querySelectorAll("input")].forEach((el) => {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
  });

  function onFocus(ev) {
    ev.target.parentElement.classList.add("focused");
  }

  function onBlur(ev) {
    ev.target.parentElement.classList.remove("focused");
  }
}
