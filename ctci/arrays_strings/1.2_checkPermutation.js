// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2) {
  // Iterate through the shorter string (optional)
  // Have a counter object that tallies the number of times each character appears in the string
  // Iterate through the second string and deduct from the counter object as you go, if the count falls below zero, return false
  // At the end, if the object still has any keys, return false
  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let currChar = str1[i];
    if (charCount[currChar]) {
      charCount[currChar] += 1;
    } else {
      charCount[currChar] = 0;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let currChar = str2[i];
    if (charCount[currChar]) {
      charCount[currChar] -= 1;
      if (charCount[currChar] === 0) { delete charCount[currChar]; }
    } else {
      return false;
    }
  }

  return Object.keys(charCount).length === 0;
}

export { checkPermutation };
