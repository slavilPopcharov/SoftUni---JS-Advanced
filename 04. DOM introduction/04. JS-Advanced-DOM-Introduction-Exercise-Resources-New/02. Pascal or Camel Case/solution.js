function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let cresult = '';

  if (convention === 'Camel Case'){
    for (let i = 0; i < text.length; i++) {
      let curent = text[i];
      
      if (i == 0) {
        if (curent === text[i].toUpperCase()) {
          curent = text[i].toLowerCase();
        }
      }

      
      if (curent === " ") {
        cresult += text[i + 1].toUpperCase();
        i++
      }else{
        cresult += curent.toLowerCase();
      }
      
    }
     result.textContent = cresult//.split(' ').join('');

  }else if (convention === 'Pascal Case'){
    for (let i = 0; i < text.length; i++) {
      let curent = text[i];
      if (i == 0) {
        if (curent === text[i].toLowerCase()) {
          curent = text[i].toUpperCase();
          cresult += curent
        }
      }
      if (curent === " ") {
        cresult += text[i + 1].toUpperCase();
        i++
      }else{
        cresult += curent.toLowerCase();
      }
      
    }
     result.textContent = cresult//.split(' ').join('');
  }else{
    result.textContent = 'Error!'
  }
}


//colegue solution
function solve() {
  let inputText = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  function makeTextCamelCase(text) {
    let allWords = text.toLowerCase().split(' ');
    let result = '';

    result += allWords.shift();
    result += allWords.map(word => capitalize(word)).join('');
    return result;
  }

  function makeTextPascalCase(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => capitalize(word))
      .join('');
  }

  if (namingConvention === 'Camel Case') {
    document.getElementById('result').textContent = makeTextCamelCase(inputText);
  } else if (namingConvention === 'Pascal Case') {
    document.getElementById('result').textContent = makeTextPascalCase(inputText);
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}