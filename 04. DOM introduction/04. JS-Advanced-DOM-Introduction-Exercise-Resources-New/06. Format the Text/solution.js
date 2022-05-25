function solve() {
  let textElement = document.getElementById("input").value;
  let textAsArray = textElement.split(".").filter(s => s!== '')
  let outputElement = document.getElementById("output");

  while (textAsArray.length > 0) {
    let text = textAsArray.splice(0,3).join('. ')+ '.';
    let pElement = document.createElement('p');
    pElement.textContent = text;
    outputElement.appendChild(pElement);
  }
  
}
