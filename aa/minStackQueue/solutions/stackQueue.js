// Implementing the queue using stacks. As a reminder, the queue should have the following functionality:

// enqueue(x) -- Push element x onto queue.
// dequeue() -- Removes the element on front of the queue.
// peek() -- Get the next upcoming element.
// getMin() -- Retrieve the minimum element in the queue.

const Stack = require('./minStack');

class StackQueue {
  constructor() {
    this.enqueueStore = new Stack();
    this.dequeueStore = new Stack();
  }

  enqueue(num) {
    this.enqueueStore.push(num);
  }

  dequeue() {
    if (this.dequeueStore.isEmpty()) {
      this._transferStacks();
    }

    this.dequeueStore.pop();
  }

  peek() {
    if (this.dequeueStore.isEmpty()) {
      this._transferStacks();
    }

    return this.dequeueStore.peek();
  }

  length() {
    return this.enqueueStore.length() + this.dequeueStore.length();
  }

  getMin() {
    const minimums = [];
    if (!this.enqueueStore.isEmpty()) {
      minimums.push(this.enqueueStore.min());
    }

    if (!this.dequeueStore.isEmpty()) {
      minimums.push(this.dequeueStore.min());
    }

    return minimums.length === 0 ? null : Math.min(...minimums);
  }

  _transferStacks() {
    while (!this.enqueueStore.isEmpty()) {
      this.dequeueStore.push(this.enqueueStore.pop());
    }
  }
}

module.exports = StackQueue;
