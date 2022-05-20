function sortsNames(names) {
  return names
      .sort((a, b) => a.localeCompare(b))
      .map((element, index) => `${++index}.${element}`)
      .join('\n');
}