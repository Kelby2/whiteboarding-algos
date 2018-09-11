// Implement a function to check if a linked list is a palindrome.

function palindrome(node) {
  let start = node;
  let length = 0;
  while (start !== null) {
    length++;
    start = start.next;
  }

  const midpoint = Math.floor(length/2);

  const firstSection = [];
  const secondSection = [];

  start = node;
  let middle;

  for (let i = 0; i < midpoint; i++) {
    firstSection.push(start.val);
    start = start.next;
  }

  if (length % 2 !== 0) {
    start = start.next;
  }

  for (let i = 0; i < midpoint; i++) {
    secondSection.push(start.val);
    start = start.next;
  }

  return JSON.stringify(firstSection) === JSON.stringify(secondSection.reverse());

}

module.exports = palindrome;
