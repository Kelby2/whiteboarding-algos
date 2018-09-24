class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  // used for test cases, since we can't compare objects, this will print out the remaining links following the node and check for equality between the strings
  remainingLinks() {
    const values = [];
    let that = this;
    while (that !== null) {
      values.push(that.val);
      that = that.next;
    }
    return JSON.stringify(values);
  }
}

module.exports = Node;
