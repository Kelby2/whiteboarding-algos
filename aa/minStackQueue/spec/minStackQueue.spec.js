const MinStack = require('../lib/minStack');
const MinQueue = require('../lib/minQueue');
const StackQueue = require('../lib/stackQueue');

describe("minStack", () => {
  let testStack = new MinStack();
  testStack.push(5);
  testStack.push(4);
  testStack.push(3);
  testStack.push(2);

  // bottom of stack => [5, 4, 3, 2] => top of stack

  test("peek should return the value of the integer at the top of the stack", () => {
    expect(testStack.peek()).toBe(2);
  });

  test("push should add the given integer to the top of the stack", () => {
    testStack.push(5);
    expect(testStack.peek()).toBe(5);
  });

  test("push should return the list of integers (including the one most recently pushed) of the stack", () => {
    expect(testStack.push(1).length).toBe(6);
    expect(testStack.push(5).length).toBe(7);
  });

  test("pop should remove the integer at the top of the stack", () => {
    testStack.push(2);
    expect(testStack.pop()).toBe(2);
    expect(testStack.values.length).toBe(7);
  });

  test("min should return the current minimum value in the stack", () => {
    expect(testStack.min()).toBe(1);
    testStack.push(0);
    expect(testStack.min()).toBe(0);
    testStack.pop();
    expect(testStack.min()).toBe(1);
  });
});

describe("minQueue", () => {
  let testQueue = new MinQueue();
  testQueue.enqueue(3);
  testQueue.enqueue(1);
  testQueue.enqueue(4);
  testQueue.enqueue(2);

  // back of queue => [3, 1, 4, 2] => front of queue

  test("enqueue should add the given number to the end of the queue", () => {
    expect(testQueue.length()).toBe(4);
    testQueue.enqueue(3);
    expect(testQueue.length()).toBe(5);
  });

  test("peek should return the first number in the queue", () => {
    expect(testQueue.peek()).toBe(3);
  });

  test("dequeue should pop off the first number in the queue and return it", () => {
    testQueue.dequeue();
    expect(testQueue.length()).toBe(4);
  });


  test("min should return the current mininum value of the queue", () => {
    expect(testQueue.min()).toBe(1);
    testQueue.dequeue();
    expect(testQueue.min()).toBe(2);
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.enqueue(2);
    expect(testQueue.min()).toBe(2);
  });

});

describe("stackQueue", () => {
  let testStackQueue = new StackQueue();
  testStackQueue.enqueue(3);
  testStackQueue.enqueue(1);
  testStackQueue.enqueue(4);

  // back of queue => [3, 1, 4] => front of queue

  test("enqueue should add the given number to the end of the queue", () => {
    expect(testStackQueue.length()).toBe(3);
  });

  test("dequeue should remove the first number in the queue", () => {
    testStackQueue.dequeue();
    expect(testStackQueue.length()).toBe(2);
    expect(testStackQueue.peek()).toBe(1);
  });

  test("getMin should return the lowest number in the queue", () => {
    expect(testStackQueue.getMin()).toBe(1);
    testStackQueue.dequeue();
    testStackQueue.dequeue();
    expect(testStackQueue.getMin()).toBe(null);
  });

});
