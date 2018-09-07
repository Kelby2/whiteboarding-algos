const Node = require('../node');
const removeDups = require('../2.1_removeDups');
const returnKthToLast = require('../2.2_returnKthToLast');
const deleteMiddleNode = require('../2.3_deleteMiddleNode');
const partition = require('../2.4_partition');
const sumLists = require('../2.5_sumLists');
const palindrome = require('../2.6_palindrome');
const intersection = require('../2.7_intersection');
const loopDetection = require('../2.8_loopDetection');

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

    console.log('hi');
    let partitionedList3 = partition(nodes[0], 9);
    expect(partitionedList3.remainingLinks()).toBe("[6,5,3,3,5,2,2,3,8,9]");
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
