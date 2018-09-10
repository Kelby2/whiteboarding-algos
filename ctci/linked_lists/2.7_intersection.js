// Given two (singly) linked lists, determine if the two lists intersect. Return the inter- secting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

function intersection(head1, head2) {
  let listOneLength = getListLength(head1);
  let listTwoLength = getListLength(head2);
  let shorterList; let longerList; let lengthDifference;

  if (listOneLength < listTwoLength) {
    shorterList = head1;
    longerList = head2;
    lengthDifference = listTwoLength - listOneLength;
  } else {
    shorterList = head2;
    longerList = head1;
    lengthDifference = listOneLength - listTwoLength;
  }

  for (let i = 0; i < lengthDifference; i++) {
    longerList = longerList.next;
  }

  while(longerList !== null) {
    if (shorterList === longerList) {
      return shorterList;
    }
    
    shorterList = shorterList.next;
    longerList = longerList.next;

  }

  return false;
}

function getListLength(linkNode) {
  let length = 0;

  while (linkNode !== null) {
    length += 1;
    linkNode = linkNode.next;
  }

  return length;
}

module.exports = intersection;
