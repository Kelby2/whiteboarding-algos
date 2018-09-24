class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

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
