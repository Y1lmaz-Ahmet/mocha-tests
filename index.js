function myFunction(a, b) {
  return a + b;
}
function doubleChar(str) {
  return str
    .split("")
    .map((x) => x + x)
    .join("");
}
function sentence(words) {
  return words.join(" ");
}
//this.split(' ') => string to array
//.map((x) => x[0].toUpperCase() => first char to upper in a word
//x.slice(1) => concatenates back the remainder portion starting at index 1,
//aka the second letter of each word
//converts array to string
function Capitalisation(str) {
  return str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
}
function yearQuarters(month) {
  //constraint:1 <= month <= 12
  if (month >= 1 && month <= 3) {
    return (month = 1);
  } else if (month >= 4 && month <= 6) {
    return (month = 2);
  } else if (month >= 7 && month <= 9) {
    return (month = 3);
  } else {
    return (month = 4);
  }
}

module.exports = {
  myFunction,
  doubleChar,
  sentence,
  Capitalisation,
  yearQuarters,
};
