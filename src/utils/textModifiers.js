const capitalizeFirstLetters = (word) =>
  word
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    .split(/(?=[A-Z])/)
    .join(" ");

export { capitalizeFirstLetters };
