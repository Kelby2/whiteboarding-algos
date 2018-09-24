// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

// EXAMPLE
// Input: (7 -> 1 -> 6) + ( 5 -> 9 -> 2)
// That is, 617 + 295.
// Output: 2 -> 1 -> 9. That is, 912

// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).
// That is, 617 + 295.
// Output: 9 -> 1 -> 2. That is, 912.

const Node = require('./node');

function sumLists(node1, node2) {
  let sum;
  let val;
  let prev;
  let head;
  let carryOver = 0;

  let currentNodeOne = node1;
  let currentNodeTwo = node2;

  while (currentNodeOne || currentNodeTwo) {
    value1 = currentNodeOne ? currentNodeOne.val : 0;
    value2 = currentNodeTwo ? currentNodeTwo.val : 0;
    sum = value1 + value2 + carryOver;
    carryOver = Math.floor(sum/10);
    value = sum % 10;
    let newestNode = new Node(value);

    if (!prev) {
      head = newestNode;
    } else {
      prev.next = newestNode;
    }

    prev = newestNode;

    if (currentNodeOne) {
      currentNodeOne = currentNodeOne.next;
    }

    if (currentNodeTwo) {
      currentNodeTwo = currentNodeTwo.next;
    }
  }

  if (sum > 10) {
    newestNode = new Node(carryOver);
    prev.next = newestNode;
  }

  return head;
}

module.exports = sumLists;
