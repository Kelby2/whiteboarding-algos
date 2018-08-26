// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Using object to keep track of seen characters
function isUnique(string) {
  const seen = {};

  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];
    if (seen[currChar]) {
      return false;
    } else {
      seen[currChar] = true;
    }
  }

  return true;
}

// O(n^2) approach without extra data structures

function isUnique2(string) {

  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }

  return true;
}

export { isUnique };
