// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(string) {
  // Iterate through the given string, for each char
  // If equal to the next character, continue until streak ends
  // Append character and streak count to the new string

  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let streak = 1;
    let currChar = string[i];
    let nextChar = string[i + 1];

    while (string[i] === string[i + 1]) {
      streak++; i++;
    }

    newString += currChar + streak;
  }

  return newString.length >= string.length ? string : newString;
}

module.exports = stringCompression;
