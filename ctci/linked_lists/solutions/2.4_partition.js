// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need to be after the elements less than x (see below).The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 ->10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

function partition(node, x) {
  let lesserHead;
  let lesserTail;
  let greaterHead = null;
  let greaterTail;

  while (node !== null) {
    if (node.val < x) {
      if (lesserHead) {
        lesserTail.next = node;
      } else {
        lesserHead = node;
      }
      lesserTail = node;
    } else {
      if (greaterHead) {
        greaterTail.next = node;
      } else {
        greaterHead = node;
      }
      greaterTail = node;
    }

    node = node.next;
  }

  if (!lesserHead) {
    return greaterHead;
  }

  if (greaterHead) {
    lesserTail.next = greaterHead;
    greaterTail.next = null;
  }

  return lesserHead;
}

module.exports = partition;
