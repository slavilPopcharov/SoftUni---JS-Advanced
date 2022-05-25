function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let data = document.querySelectorAll("tbody tr");
  let searchElement = document.getElementById("searchField");

  function onClick() {
    for (let e of data) {
      e.classList.remove("select");
      // The .value must be here for the code to work fine
      if (
        searchElement.value !== "" &&
        e.textContent.includes(searchElement.value)
      ) {
        e.className = "select";
      }
    }
    searchElement.value = ""; //and here
  }
}
