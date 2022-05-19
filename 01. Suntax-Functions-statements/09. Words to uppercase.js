function makeWordsUppercase(words = '') {
  const regex = /[A-z0-9_]+/g;

  let result = words.match(regex);

  console.log(result.join(', ').toUpperCase());
}