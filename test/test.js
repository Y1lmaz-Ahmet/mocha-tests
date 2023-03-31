const assert = require("assert");
const { expect } = require("chai");
const { describe, it } = require("mocha");
const {
  myFunction,
  doubleChar,
  sentence,
  Capitalisation,
  yearQuarters,
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
