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
function reverseString(str) {
  //turns string into array with each char in a unique index
  //reverse order of the chars in the array
  //turning the array into a string and returning it
  //no return => undefined value
  str = str.split("");
  return str.reverse().join("");
}
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}
function sayHello(name) {
  return `Hello, ${name}`;
}
function rockPaperScissor(p1, p2) {
  //draw
  if (p1 === p2) return "Draw!";
  //player 1 wins
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  //player 2 wins
  if (p2 === "rock" && p1 === "scissors") return "Player 2 won!";
  if (p2 === "scissors" && p1 === "paper") return "Player 2 won!";
  if (p2 === "paper" && p1 === "rock") return "Player 2 won!";
}
function keyValueGen(array) {
  return array.map((n, i) => `${i + 1}: ${n}`);
}
function findMinValue(array) {
  return Math.min(...array);
}
function findMaxValue(array) {
  return Math.max(...array);
}

module.exports = {
  myFunction,
  doubleChar,
  sentence,
  Capitalisation,
  yearQuarters,
  reverseString,
  checkForFactor,
  sayHello,
  rockPaperScissor,
  keyValueGen,
  findMinValue,
  findMaxValue,
};
