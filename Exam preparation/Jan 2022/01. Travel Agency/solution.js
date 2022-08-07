window.addEventListener('load', solution);


function solution() {
  let name = document.getElementById('fname');
  let emailEl = document.getElementById('email');
  let phoneEl = document.getElementById('phone');
  let adresEl = document.getElementById('address');
  let postCodeEl = document.getElementById('code');
  //phoneEl.setAttribute('type', 'text')
  //postCodeEl.setAttribute('type', 'text')

  let submitButton = document.getElementById('submitBTN');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');
  submitButton.addEventListener('click', submit);
  editButton.addEventListener('click', edit);
  continueButton.addEventListener('click', finish);

  let previewField = document.getElementById('infoPreview')
  let userInfo = [];

  function submit() {
    if (name.value !== '' && emailEl.value !== ''){
        userInfo.push(name.value)
        userInfo.push(emailEl.value)
        userInfo.push(phoneEl.value)
        userInfo.push(adresEl.value)
        userInfo.push(postCodeEl.value)
      let nameLi = document.createElement('li');
      nameLi.textContent = `Full Name: ${name.value}`;
      previewField.appendChild(nameLi);

      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${emailEl.value}`;
      previewField.appendChild(emailLi);

      let phoneLi = document.createElement('li');
      phoneLi.textContent = `Phone Number: ${phoneEl.value}`;
      previewField.appendChild(phoneLi);

      let adresLi = document.createElement('li');
      adresLi.textContent = `Address: ${adresEl.value}`;
      previewField.appendChild(adresLi);

      let postCodeLi = document.createElement('li');
      postCodeLi.textContent = `Postal Code: ${postCodeEl.value}`;
      previewField.appendChild(postCodeLi); 

    [name,emailEl,phoneEl,adresEl,postCodeEl].forEach(e => e.value = '');

    editButton.disabled = false;
    continueButton.disabled = false;
    submitButton.disabled = true;
    }
  }

  function edit() {
    [name.value,emailEl.value,phoneEl.value,adresEl.value,postCodeEl.value] = userInfo
    let children = Array.from(previewField.children)
    children.forEach(e => e.remove())
    userInfo = []
    editButton.disabled = true;
    continueButton.disabled = true;
    submitButton.disabled = false;
  }

  function finish() {
    let blockDivEl = document.getElementById('block');
    blockDivEl.innerHTML = ''
    let h3Element = document.createElement('h3')
    h3Element.textContent = 'Thank you for your reservation!'
    blockDivEl.appendChild(h3Element)
  }
}
