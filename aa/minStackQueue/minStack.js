// Create a stack that has the push, pop, peek functionality, as well as a min function, that returns the lowest integer in the stack

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

  min() {
    return this.minValues[this.minValues.length - 1];
  }
}

module.exports = minStack;
