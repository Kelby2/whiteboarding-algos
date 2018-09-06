const Node = require('../node');
const removeDups = require('../2.1_removeDups');
const returnKthToLast = require('../2.2_returnKthToLast');
const deleteMiddleNode = require('../2.3_deleteMiddleNode');
const partition = require('../2.4_partition');
const sumLists = require('../2.5_sumLists');
const palindrome = require('../2.6_palindrome');
const intersection = require('../2.7_intersection');
const loopDetection = require('../2.8_loopDetection');

const nodes = [6,5,3,3,5,1,2,3,8,9].map(num => new Node(num));
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
    expect(head.remainingLinks()).toBe("[6,5,3,1,2,8,9]");
    expect(head2.remainingLinks()).toBe("[5]");
  });

});

describe("returnKthToLast", () => {
  //current list is [6->5->3->3->5->1->5->2->3->8->9]
  let head = nodes[0];

  test("should return the kth to last element in the linked list", () => {
    expect(returnKthToLast(head, 3).val).toBe(3);
    expect(returnKthToLast(head, 6).val).toBe(5);
    expect(returnKthToLast(head, 10).val).toBe(6);
    expect(returnKthToLast(head, 15)).toBe(null);
  });
});

describe("deleteMiddleNode", () => {
  //current list is [6->5->3->3->5->1->5->2->3->8->9]

  test("", () => {
    deleteMiddleNode(nodes[5]);
    expect(nodes[0].remainingLinks()).toBe("[6,5,3,3,5,2,3,8,9]");
  });
});

describe("partition", () => {
  test("", () => {

  });
});

describe("sumLists", () => {
  test("", () => {

  });
});

describe("palindrome", () => {
  test("", () => {

  });
});

describe("intersection", () => {
  test("", () => {

  });
});

describe("loopDetection", () => {
  test("", () => {

  });
});
