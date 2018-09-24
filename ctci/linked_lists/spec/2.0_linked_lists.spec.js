const Node = require('../lib/node');
const removeDups = require('../lib/2.1_removeDups');
const returnKthToLast = require('../lib/2.2_returnKthToLast');
const deleteMiddleNode = require('../lib/2.3_deleteMiddleNode');
const partition = require('../lib/2.4_partition');
const sumLists = require('../lib/2.5_sumLists');
const palindrome = require('../lib/2.6_palindrome');
const intersection = require('../lib/2.7_intersection');
const loopDetection = require('../lib/2.8_loopDetection');

const nodes = [6,5,3,3,5,1,2,3,9,8].map(num => new Node(num));
for (let i = 0; i < nodes.length - 1; i++) {
  nodes[i].next = nodes[i + 1];
}

function resetNodes() {
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
}


const dupNodes = [5,5,5,5,5].map(num => new Node(num));
for (let j = 0; j < dupNodes.length - 1; j++) {
  dupNodes[j].next = dupNodes[j + 1];
}

describe("removeDups", () => {
  afterAll(() => {
    resetNodes();
  });

  let head = removeDups(nodes[0]);
  let head2 = removeDups(dupNodes[0]);

  test("should remove duplicates", () => {
    expect(head.remainingLinks()).toBe("[6,5,3,1,2,9,8]");
    expect(head2.remainingLinks()).toBe("[5]");
  });

});

describe("returnKthToLast", () => {
  //current list is [6->5->3->3->5->1->2->3->8->9]
  let head = nodes[0];

  test("should return the kth to last element in the linked list", () => {
    expect(returnKthToLast(head, 3).val).toBe(3);
    expect(returnKthToLast(head, 6).val).toBe(5);
    expect(returnKthToLast(head, 10).val).toBe(6);
    expect(returnKthToLast(head, 15)).toBe(null);
  });
});

describe("deleteMiddleNode", () => {
  //current list is [6->5->3->3->5->1->2->3->8->9]

  afterAll(() => {
    resetNodes();
  });

  test("", () => {
    deleteMiddleNode(nodes[5]);
    expect(nodes[0].remainingLinks()).toBe("[6,5,3,3,5,2,3,9,8]");
  });
});

describe("partition", () => {
  //current list is [6->5->3->3->5->2->2->3->8->9]

  afterEach(() => {
    resetNodes();
  });

  test("should partition the nodes based on the values and separator", () => {
    let partitionedList = partition(nodes[0], 5);
    expect(partitionedList.remainingLinks()).toBe("[3,3,2,2,3,6,5,5,9,8]");
  });

  test("should return the same list if there is only one side", () => {
    let partitionedList2 = partition(nodes[0], 2);
    expect(partitionedList2.remainingLinks()).toBe("[6,5,3,3,5,2,2,3,9,8]");

    let partitionedList3 = partition(nodes[0], 9);
    expect(partitionedList3.remainingLinks()).toBe("[6,5,3,3,5,2,2,3,8,9]");
  });
});

describe("sumLists", () => {
  const nodeList1 = [7,1,6].map(num => new Node(num));
  const nodeList2 = [5,9,2].map(num => new Node(num));
  const nodeList3 = [5,9,4].map(num => new Node(num));
  const nodeList4 = [3,3].map(num => new Node(num));
  const nodeListOneTwoSum = [2,1,9].map(num => new Node(num));
  const nodeListOneThreeSum = [2,1,1,1].map(num => new Node(num));
  const nodeListOneFourSum = [0,5,6].map(num => new Node(num));
  linkLists(nodeList1, nodeList2, nodeList3, nodeList4, nodeListOneTwoSum, nodeListOneThreeSum, nodeListOneFourSum);

  test("should add the two lists together", () => {
    expect(sumLists(nodeList1[0], nodeList2[0]).remainingLinks()).toBe(nodeListOneTwoSum[0].remainingLinks());
  });

  test("handles cases where you may need to add values", () => {
    expect(sumLists(nodeList1[0], nodeList3[0]).remainingLinks()).toBe(nodeListOneThreeSum[0].remainingLinks());
  });

  test("handles cases where lists are not the same length", () => {
    expect(sumLists(nodeList1[0], nodeList4[0]).remainingLinks()).toBe(nodeListOneFourSum[0].remainingLinks());
  });
});

describe("palindrome", () => {
  const paliList = [3,1,2,1,3].map(num => new Node(num));
  const paliList2 = [5,7,7,5].map(num => new Node(num));
  const nonPaliList = [2,3,3,1,2].map(num => new Node(num));
  linkLists(paliList, paliList2, nonPaliList);
  test("returns true if the linked list is a palindrome", () => {
    expect(palindrome(paliList[0])).toBe(true);
    expect(palindrome(paliList2[0])).toBe(true);
  });

  test("returns false if the linked list is not a palindrome", () => {
    expect(palindrome(nonPaliList[0])).toBe(false);
  });

  test("should not mutate the original list", () => {
    palindrome(paliList[0]);
    palindrome(paliList2[0]);

    expect(paliList[0].remainingLinks()).toBe("[3,1,2,1,3]");
    expect(paliList2[0].remainingLinks()).toBe("[5,7,7,5]");
  });
});

describe("intersection", () => {
  const nodeList1 = [3,4,6,8,4,5,2].map(num => new Node(num));
  const nodeList2 = [3,5].map(num => new Node(num));
  //list3 and list1 match by value but not by reference
  const nodeList3 = [3,1,6,8,4,5,2].map(num => new Node(num));
  linkLists(nodeList1, nodeList2, nodeList3);
  nodeList2[1].next = nodeList1[4];
  test("should return the node that intersects the two lists", () => {
    expect(intersection(nodeList1[0], nodeList2[0])).toBe(nodeList1[4]);
  });

  test("should return null if the two lists do not intersect", () => {
    expect(intersection(nodeList1[0], nodeList3[0])).toBe(false);
  });
});

describe("loopDetection", () => {
  const loopedList = [5,4,1,2,8,6,3].map(num => new Node(num));
  const loopedList2 = [3,2,6,4,3,7,1].map(num => new Node(num));
  linkLists(loopedList, loopedList2);
  loopedList[loopedList.length - 1].next = loopedList[2];
  loopedList2[loopedList.length - 1].next = loopedList2[5];
  test("returns the node that begins the loop", () => {
    expect(loopDetection(loopedList[0])).toBe(loopedList[2]);
    expect(loopDetection(loopedList2[0])).toBe(loopedList2[5]);
  });
});

function linkLists(...nodeArrays) {
  nodeArrays.forEach(nodeArray => {
    for (let i = 0; i < nodeArray.length - 1; i++) {
      nodeArray[i].next = nodeArray[i + 1];
    }
  });
}
