// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

// Input: A -> B -> C -> 0 -> E -> C [the same C as earlier]
// Output: C

function loopDetection(node) {
  let current = node;

  while (current !== null) {
    if (current.seen === true) {
      return current;
    }

    current.seen = true;
    current = current.next;
  }

  return false;
}

module.exports = loopDetection;
