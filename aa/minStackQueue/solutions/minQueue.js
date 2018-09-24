// Design a queue that supports enqueue, dequeue, peek, and retrieving the minimum element in constant time.
//
// enqueue(x) -- Push element x onto queue.
// dequeue() -- Removes the element on front of the queue.
// peek() -- Get the next upcoming element.
// getMin() -- Retrieve the minimum element in the queue.

class MinQueue {
  constructor() {
    this.values = [];
    this.minVal = null;
    this.secMinVal = null;
    this.repeatMin = 0;
  }

  enqueue(num) {
    this.values.push(num);
    if (this.minVal === num) {
      this.repeatMin++;
      this.secMinVal = null;
    } else if (this.minVal === null || num < this.minVal) {
      this.minVal = num;
      this.secMinVal = null;
      this.repeatMin = 0;
    } else if (this.secMinVal === null || num < this.secMinVal) {
      this.secMinVal = num;
    }
    return this.length();
  }

  dequeue() {
    const dequeued = this.values.shift();
    if (dequeued === this.minVal) {
      if (this.repeatMin > 0) {
        this.repeatMin--;
      } else {
        this.minVal = this.secMinVal;
        this.secMinVal = null;
      }
    }
  }

  min() {
    return this.minVal;
  }

  peek() {
    return this.values[0];
  }

  length() {
    return this.values.length;
  }
}

module.exports = MinQueue;
