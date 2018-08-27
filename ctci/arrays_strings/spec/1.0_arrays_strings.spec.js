const isUnique = require('../1.1_isUnique');
const isUnique2 = require('../1.1_isUnique');
const checkPermutation = require('../1.2_checkPermutation');
const URLify = require('../1.3_URLify');
const palinPerm = require('../1.4_palindromePermutation');
const oneAway = require('../1.5_oneAway');
const stringCompression = require('../1.6_stringCompression');

describe("isUnique", () => {
  let str1 = "nopeats";
  let str2 = "repeatedcharacters";

  test("should return true if the string has all unique characters", () => {
    expect(isUnique(str1)).toBe(true);
    expect(isUnique2(str1)).toBe(true);
  });

  test("should return false if string has duplicate chars", () => {
    expect(isUnique(str2)).toBe(false);
    expect(isUnique2(str2)).toBe(false);
  });

  test("should return true if string is empty", () => {
    expect(isUnique("")).toBe(true);
    expect(isUnique2("")).toBe(true);
  });
});

describe("checkPermutation", () => {
  let str1 = "treater";
  let str2 = "retreat";
  let str3 = "cheater";

  test("should return false if two strings are not the same length", () => {
      let str4 = "cheat";
      expect(checkPermutation(str3, str4)).toBe(false);
  });

  test("should return true if two strings are permutations", () => {
    expect(checkPermutation(str1, str2)).toBe(true);
  });

  test("should return false if two strings are not permutations", () => {
    expect(checkPermutation(str2, str3)).toBe(false);
  });
});

describe("URLify", () => {
  let str1 = "Hello, Mr John Smith";
  let str2 = "Today is a good day";
  let str3 = "  Leading And Trailing spaces   ";

  test("should return string with all spaces replaced with %20", () => {
    expect(URLify(str1)).toBe("Hello,%20Mr%20John%20Smith");
    expect(URLify(str2)).toBe("Today%20is%20a%20good%20day");
  });

  test("should not replace trailing or leading white spaces", () => {
    expect(URLify(str3)).toBe("Leading%20And%20Trailing%20spaces");
  });
});

describe ("palindromePerm", () => {
  let str1 = "a man named eda"; //amaneddenama
  let str2 = "carecar"; //racecar
  let str3 = "how did this happen?";
  let str4 = "She Wishes we es";

  test("should return true if string can be made into a palindrome", () => {
    expect(palinPerm(str1)).toBe(true);
    expect(palinPerm(str2)).toBe(true);
  });

  test("should return false if the string cannot be made into a palindrome", () => {
    expect(palinPerm(str3)).toBe(false);
  });

  test("ignores case and white spaces", () => {
    expect(palinPerm(str4)).toBe(true);
  });
});

describe ("oneAway", () => {
  let str1 = "exampl"; let str2 = "example";
  let str3 = "race"; let str4 = "rake";

  test("should return true if they are the same string", () => {
    expect(oneAway(str1, str1)).toBe(true);
  });

  test("should return true if you could create the second string by adding a new character", () => {
    expect(oneAway(str1, str2)).toBe(true);
  });

  test("should return true if you could create the second string by deleting one character", () => {
    expect(oneAway(str2, str1)).toBe(true);
  });

  test("should return true if you could create the second string by replacing one character", () => {
    expect(oneAway(str3, str4)).toBe(true);
  });

  test("should return false if the second string could not be made with a single operation on the first string", () => {
    expect(oneAway(str1, str3)).toBe(false);
  });
});

describe ("stringCompression", () => {
  let str1 = "aabcccccaaa";
  let str2 = "Aaaabcccc";
  let str3 = "abcde"; //a1b1c1d1e1
  let str4 = "aaabbbcd"; // a3b3c1d1

  test("should return the compressed string", () => {
    expect(stringCompression(str1)).toBe("a2b1c5a3");
  });

  test("should be case-sensitive", () => {
    expect(stringCompression(str2)).toBe("A1a3b1c4");
  });

  test("should return the original string if the compressed string is not shorter", () => {
    expect(stringCompression(str3)).toBe(str3);
    expect(stringCompression(str4)).toBe(str4);
  });
});
