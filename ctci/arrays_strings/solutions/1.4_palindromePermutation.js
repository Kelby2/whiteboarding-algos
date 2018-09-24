// Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

// Reworded: Given a string, write a function to check if one of it's permutations is a palindrome.

// Assumptions: case-insensitive, ignore spaces

function palinPerm(str) {
  // O(n) approach, iterate through the string and count each character
  // You should have at most 1 character without a pair

  const match = {};
  const modifiedStr = str.split(' ').join('');

  for (let i = 0; i < modifiedStr.length; i++) {
      const currChar = modifiedStr[i].toLowerCase();
      if (match[currChar] === undefined) {
        match[currChar] = true;
      } else {
        match[currChar] = !match[currChar];
      }
  }

  const values = Object.values(match);
  return values.indexOf(true) === values.lastIndexOf(true);
}

module.exports = palinPerm;
