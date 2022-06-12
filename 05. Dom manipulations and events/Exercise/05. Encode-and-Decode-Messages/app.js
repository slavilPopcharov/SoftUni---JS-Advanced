function encodeAndDecodeMessages() {
  let encodeMsg = document.querySelector("div textarea");
  let encodeBtn = document.querySelector("div button");
  let decodeMsg = document.querySelector("div:nth-of-type(2) textarea");
  let decodeBtn = document.querySelector("div:nth-of-type(2) button");

  encodeBtn.addEventListener("click", encode);
  decodeBtn.addEventListener("click", decode);

  function encode() {
    let text = encodeMsg.value;
    let encodedText = "";
    for (let letter of text) {
      let newLetterValue = letter.charCodeAt() + 1;
      let newLetter = String.fromCharCode(newLetterValue);
      encodedText += newLetter;
      decodeMsg.value = encodedText;
      encodeMsg.value = "";
    }
  }

  function decode() {
    let text = decodeMsg.value;
    let decodedText = "";
    for (let letter of text) {
      let newLetterValue = letter.charCodeAt() - 1;
      let newLetter = String.fromCharCode(newLetterValue);
      decodedText += newLetter;
      decodeMsg.value = decodedText;
    }
  }
}
