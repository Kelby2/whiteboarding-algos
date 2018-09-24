// Implement an algorithm to find the kth to last element of a singly linked list.

function returnKthToLast(node, k) {
  let p1 = node;
  let p2 = node;

  for (let i = 0; i < k; i++) {
    if (p2 === null) {
      return null;
    }

    p2 = p2.next;
  }

  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

module.exports = returnKthToLast;
