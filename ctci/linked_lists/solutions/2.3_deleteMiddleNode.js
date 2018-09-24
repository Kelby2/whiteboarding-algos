// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

// EXAMPLE
// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned
// the new linked list looks like: a -> b -> d -> e -> f

function deleteMiddleNode(node) {
  //node given IS the middle node, not the head

  /*
    copy next nodes data into the current node
    delete the next node accordingly
  */
  if (node.next === null) return;
  node.val = node.next.val;
  node.next = node.next.next;
  return;
}

module.exports = deleteMiddleNode;
