function search() {
  let inputElement = document.getElementById("searchText").value;
  let townListEl = document.querySelectorAll("li");
  let resultCountEl = document.getElementById("result");
  let towns = Array.from(townListEl);
  let matchCount = 0;
  for (let town of towns) {
    if (town.textContent.includes(inputElement) && inputElement !== "") {
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      matchCount++;
    } else {
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";
    }
  }
  resultCountEl.textContent = `${matchCount} matches found`;
}
