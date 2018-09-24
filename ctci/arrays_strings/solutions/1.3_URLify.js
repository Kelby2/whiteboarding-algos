// Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

function URLify(string) {
  // return string.trim().split(' ').join('%20').trim();
  let resultString = "";
  const modifiedString = string.trim();

  for (let i = 0; i < modifiedString.length; i++) {
    const currChar = modifiedString[i];
    if (currChar === " ") {
      resultString += "%20";
    } else {
      resultString += currChar;
    }
  }

  return resultString;
}

module.exports = URLify;
