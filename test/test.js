const assert = require("assert");
const { expect } = require("chai");
const { describe, it } = require("mocha");
const {
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
  stringToInt,
  countBy,
  add,
  max,
  stringLength,
} = require("../index");
describe("myFunction", () => {
  it("should return the sum of two numbers", () => {
    expect(myFunction(2, 3)).to.equal(5);
  });
});
describe("doubleChar", () => {
  it("should double every character in a string", () => {
    expect(doubleChar("abcde")).to.equal("aabbccddee");
  });

  it("should return an empty string if given an empty string", () => {
    expect(doubleChar("")).to.be.equal("");
  });
});
describe("sentence", () => {
  it("Should return empty string for empty array.", () => {
    assert.strictEqual(sentence([]), "");
  });
  it("one word example, should return the word", () => {
    assert.strictEqual(sentence(["hello"]), "hello");
  });
  it("multiple words, should return separate with space between", () => {
    assert.strictEqual(
      sentence(["hello", "amazing", "world"]),
      "hello amazing world"
    );
    assert.strictEqual(
      sentence(["this", "is", "a", "really", "long", "sentence"]),
      "this is a really long sentence"
    );
  });
});
describe("Capitalisation", () => {
  it("should capitalise every first char of a new word", () => {
    let str = "How can mirrors be real if our eyes aren't real";

    assert.equal(
      str
        .split(" ")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" "),
      "How Can Mirrors Be Real If Our Eyes Aren't Real"
    );
  });
});
describe("yearQuarters", () => {
  it("return to which quarter of the year it belongs as an integer number", () => {
    assert.strictEqual(yearQuarters(1), 1);
    assert.strictEqual(yearQuarters(4), 2);
    assert.strictEqual(yearQuarters(7), 3);
    assert.strictEqual(yearQuarters(12), 4);
  });
});
describe("reverseString", () => {
  it("return the string in reverse order", () => {
    assert.strictEqual(reverseString("world"), "dlrow");
    assert.strictEqual(reverseString("ahmet"), "temha", "should be temha");
    assert.notStrictEqual(reverseString("ahmet"), "ahmet");
    assert.strictEqual(reverseString(""), "", "empty string");
  });
});
describe("checkForFactor", () => {
  it("Return true if it is a factor", () => {
    assert.strictEqual(checkForFactor(10, 2), true, "should be true");
    assert.strictEqual(checkForFactor(2450, 5), true, "should be true");
    assert.strictEqual(checkForFactor(24612, 3), true, "should be true");
    assert.equal(checkForFactor(63, 7), true, "expected:true");
    expect(checkForFactor(40, 2)).to.be.true;
  });
  it("returns false if it is NOT a factor", () => {
    assert.strictEqual(checkForFactor(6, 4), false, "expected:false");
    assert.strictEqual(checkForFactor(653, 7), false, "expected:false");
    expect(checkForFactor(24617, 3), "factor").to.be.false;
  });
});
describe("sayHello", () => {
  it("return a string text to greet the user", () => {
    assert.strictEqual(sayHello("ahmet"), "Hello, ahmet");
    expect(sayHello("ahmet")).to.equal("Hello, ahmet");
    assert.strictEqual(sayHello("Liutenant Uhura"), "Hello, Liutenant Uhura");
    assert.notDeepStrictEqual(sayHello("Dr. McCoy"), "Hello, Dr. McCoyyy");
  });
});
describe("rockPaperScissor", () => {
  it("player 1 has won", () => {
    assert.strictEqual(rockPaperScissor("rock", "scissors"), "Player 1 won!");
    assert.strictEqual(rockPaperScissor("scissors", "paper"), "Player 1 won!");
    assert.strictEqual(rockPaperScissor("paper", "rock"), "Player 1 won!");
  });
  it("player 2 has won", () => {
    assert.strictEqual(rockPaperScissor("scissors", "rock"), "Player 2 won!");
    assert.strictEqual(rockPaperScissor("paper", "scissors"), "Player 2 won!");
    assert.strictEqual(rockPaperScissor("rock", "paper"), "Player 2 won!");
  });
  it("its a draw", () => {
    assert.strictEqual(rockPaperScissor("rock", "rock"), "Draw!");
  });
});

describe("keyValueGen", () => {
  it("implementing the line numbering", () => {
    assert.deepEqual(keyValueGen([]), [], "should return an empty array");
    assert.deepEqual(keyValueGen(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
  });
});
describe("findMinValue", () => {
  it("return the MIN value from the array", () => {
    assert.strictEqual(
      findMinValue([-52, 56, 30, 29, -54, 0, -110]),
      -110,
      "expected:-110"
    );
    assert.strictEqual(findMinValue([42, 54, 65, 87, 0]), 0);
  });
});
describe("findMaxValue", () => {
  it("return the MAX value from the array", () => {
    assert.strictEqual(
      findMaxValue([-52, 56, 30, 29, -54, 0, -110]),
      56,
      "expected:-110"
    );
    assert.strictEqual(findMaxValue([4, 6, 2, 1, 9, 63, -134, 566]), 566);
    assert.strictEqual(findMaxValue([5]), 5);
  });
});
describe("stringToInt", () => {
  it("converts STRING value to INTEGER", () => {
    assert.strictEqual(stringToInt("123"), 123, "expect: number 123");
    expect(stringToInt("123")).to.equal(123);
  });
});
describe("countBy", () => {
  it("function with two arguments that will return an array of the first n multiples of x", () => {
    assert.deepEqual(
      countBy(1, 10),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "array doesnt match"
    );
    assert.deepEqual(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match");
  });
});
describe("adds 1 + 2 to equal 3", () => {
  it("adds 1 + 2 to equal 3 ", () => {
    assert.deepEqual(add(1, 2), 3);
    expect(add(1, 2)).to.equal(3);
  });
});
describe("max of 1 and 2 should be 2", () => {
  it("max of 1 and 2 should be 2", () => {
    expect(max(1, 2)).to.equal(2);
  });
});
describe('stringLength of "hello" should be 5', () => {
  it('stringLength of "hello" should be 5', () => {
    expect(stringLength("hello")).to.equal(5);
    expect(stringLength("hellooo")).to.equal(7);
  });
});
