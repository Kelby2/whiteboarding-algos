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

function palindromeStackApproach(node) {
  const valueStack = [];

  let current = node;
  while (current !== null) {
    valueStack.push(current.val);
    current = current.next;
  }

  current = node;
  for (let i = valueStack.length - 1; i >= 0; i--) {
    if (current.val !== valueStack[i]) {
      return false;
    }
    current = current.next;
  }

  return true;
}

function palindromeConstantSpace(node) {
  /*
    iterate through the list, find the halfway point, break off and reverse the latter half of the linked list
    compare the two linked lists
    reverse and re-append the latter half back to the original list
  */
  let slowPointer = node;
  let fastPointer = node;
  let firstHalf = node;
  let midpoint;
  let secondHalf;

  while (fastPointer !== null && fastPointer.next !== null) {
    behindSlowPointer = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  if (fastPointer !== null) {
    midpoint = slowPointer;
    slowPointer = slowPointer.next;
  }

  behindSlowPointer.next = null;
  slowPointer = reverse(slowPointer);

  let res = compareLists(firstHalf, slowPointer);
  slowPointer = reverse(slowPointer);

  if (midpoint) {
    midpoint.next = slowPointer;
    behindSlowPointer.next = midpoint;
  } else {
    behindSlowPointer.next = slowPointer;
  }

  return res;
}

function compareLists(node1, node2) {
  while (node1 !== null && node2 !== null) {
    if (node1.val !== node2.val) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  return node1 === node2;
}

function reverse(node) {
  let prev = null;
  let next;
  while (node !== null) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}

module.exports = palindromeConstantSpace;
