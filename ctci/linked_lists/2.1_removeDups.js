// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

//***This does not remove all duplicate occurences. Just returns a LL with no dupes***

function removeDups(headNode) {

  const seen = {};

  let currNode = headNode;

  while (currNode !== null) {
    seen[currNode.val] = true;

    let nextNode = currNode.next;
    while (nextNode !== null && seen[nextNode.val]) {
      nextNode = nextNode.next;
    }

    currNode.next = nextNode;
    currNode = nextNode;
  }
  return headNode;
}

module.exports = removeDups;
