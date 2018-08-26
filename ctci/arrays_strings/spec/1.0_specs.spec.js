// import { isUnique } from './1.1_isUnique.js';
const isUnique = require('../1.1_isUnique.js');
const checkPermutation = require('../1.2_checkPermutation.js');

describe("isUnique", () => {
  test("should return true if the string has all unique characters", () => {
    let str1 = "helosir";
    expect(isUnique(str1)).toBeTruthy();
  });

  test("should return false if string has duplicate chars", () => {
    let str2 = "repeatedcharacters";
    expect(isUnique(str2)).toBeFalsy();
  });

  test("should return true if string is empty", () => {
    expect(isUnique("")).toBeTruthy();
  });
});

describe("checkPermutation", () => {
  let str1 = "treater";
  let str2 = "retreat";
  let str3 = "cheater";

  test("should return false if two strings are not the same length", () => {
      let str4 = "cheat";
      expect(checkPermutation(str3, str4)).toBeFalsy();
  });

  test("should return true if two strings are permutations", () => {
    expect(checkPermutation(str1, str2)).toBeTruthy();
  });

  test("should return false if two strings are not permutations", () => {
    expect(checkPermutation(str2, str3)).toBeFalsy();
  });
});
