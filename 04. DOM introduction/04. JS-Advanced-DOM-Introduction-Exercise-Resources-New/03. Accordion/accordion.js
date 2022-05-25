function toggle() {
  let btnElement = document.querySelector("span");
  let hiddenEllement = document.getElementById("extra");

  if (btnElement.textContent === "More") {
    hiddenEllement.style.display = "block";
    btnElement.textContent = "Less";
  } else if (btnElement.textContent === "Less") {
    hiddenEllement.style.display = "none";
    btnElement.textContent = "More";
  }
}
