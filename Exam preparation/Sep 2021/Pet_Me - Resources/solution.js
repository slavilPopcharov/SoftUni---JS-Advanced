function solve() {
  let inputFields = [...document.querySelectorAll("div#container input")];
  let [name, age, kind, curentOwner] = inputFields;
  let adoptedSection = document.querySelector("section#adopted");

  let addBtn = document.querySelector("div#container button");
  addBtn.addEventListener("click", newPet);

  let ul = document.querySelectorAll("ul")[0];

  function newPet(e) {
    e.preventDefault();

    if (
      name.value.length > 0 &&
      kind.value.length > 0 &&
      curentOwner.value.length > 0 &&
      !isNaN(age.value) &&
      age.value.length > 0
    ) {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;

      let span = document.createElement("span");
      span.textContent = `Owner: ${curentOwner.value}`;
      let button = document.createElement("button");
      button.textContent = "Contact with owner";
      button.addEventListener("click", contactOwner);

      li.appendChild(p);
      li.appendChild(span);
      li.appendChild(button);
      ul.appendChild(li);

      name.value = "";
      age.value = "";
      kind.value = "";
      curentOwner.value = "";
    }
  }

  function contactOwner(ev) {
    let div = document.createElement("div");
    let hiddenInput = document.createElement("input");
    hiddenInput.type = "text";
    hiddenInput.placeholder = "Enter your names";
    let takeItBtn = document.createElement("button");
    takeItBtn.addEventListener("click", adopt);
    takeItBtn.textContent = "Yes! I take it!";
    ev.target.parentElement.appendChild(div);
    ev.target.parentElement.removeChild(ev.target);
    div.appendChild(hiddenInput);
    div.appendChild(takeItBtn);

    function adopt(ev) {
      if (hiddenInput.value !== "") {
        let adoptPet = ev.target.parentElement.parentElement;
        adoptedSection.appendChild(adoptPet);
        let adoptPetInfo = [...adoptPet.children];
        adoptPetInfo[1].textContent = `New Owner: ${hiddenInput.value}`;
        adoptPetInfo[2].remove();
        let checkedBtn = document.createElement("button");
        checkedBtn.textContent = "Checked";
        checkedBtn.addEventListener("click", check);
        adoptPet.appendChild(checkedBtn);
        console.log();

        function check(ev) {
          ev.target.parentElement.remove();
        }
      }
    }
  }
} 
