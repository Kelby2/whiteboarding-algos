// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

class minStack {
  constructor() {
    this.values = [];
    this.minValues = [];
  }

  push(num) {
    this.values.push(num);
    if (this.minValues.length === 0
      || num <= this.minValues[this.minValues.length - 1]) {
      this.minValues.push(num);
    }

    return this.values.slice(0);
  }

  pop() {
    const popped = this.values.pop();
    if (this.minValues[this.minValues.length - 1] === popped) {
      this.minValues.pop();
    }
    return popped;
  }

  peek() {
    const lastIndex = this.values.length - 1;
    return this.values[lastIndex];
  }

  isEmpty() {
    return this.values.length === 0;
  }

  length() {
    return this.values.length;
  }

  min() {
    return this.minValues[this.minValues.length - 1];
  }
}

module.exports = minStack;
