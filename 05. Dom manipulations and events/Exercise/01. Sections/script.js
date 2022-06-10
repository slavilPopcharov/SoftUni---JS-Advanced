function create(words) {
  const contentElement = document.getElementById("content");
  contentElement.addEventListener("click", showContent);

  for (const word of words) {
    const divElement = document.createElement("div");
    const pElement = document.createElement("p");
    pElement.textContent = word;
    pElement.style.display = "none";
    divElement.appendChild(pElement);
    contentElement.appendChild(divElement);
  }

  function showContent(ev) {
    if (ev.target.tagName == "DIV") {
      ev.target.firstChild.style.display = "inline";
    }
  }
}
