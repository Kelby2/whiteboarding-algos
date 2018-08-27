// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
  // Initialize a flag that dictates if a difference has been found
  // Iterate through both strings at the same time
  // If both characters are the same, continue
  // If difference, handle cases according to the difference flag

  let foundDifference = false;
  const shorterString = str1.length < str2.length ? str1 : str2;
  const longerString = str1.length > str2.length ? str1 : str2;
  let i = 0; let j = 0;
  while (i < shorterString.length && j < longerString.length) {
    if (shorterString[i] !== longerString[j]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
      j++;
    }
    i++;
    j++;
  }

  return true;
}

module.exports = oneAway;
