const MinStack = require('../minStack');
const MinQueue = require('../minQueue');

describe("minStack", () => {
  let stackOne = new MinStack();
  stackOne.push(5);
  stackOne.push(4);
  stackOne.push(3);
  stackOne.push(2);

  test("peek should return the value of the integer at the top of the stack", () => {
    expect(stackOne.peek()).toBe(2);
  });

  test("push should add the given integer to the top of the stack", () => {
    stackOne.push(5);
    expect(stackOne.peek()).toBe(5);
  });

  test("push should return the list of integers (including the one most recently pushed) of the stack", () => {
    expect(stackOne.push(1).length).toBe(6);
    expect(stackOne.push(5).length).toBe(7);
  });

  test("pop should remove the integer at the top of the stack", () => {
    stackOne.push(2);
    expect(stackOne.pop()).toBe(2);
    expect(stackOne.values.length).toBe(7);
  });

  test("min should return the current minimum value in the data set", () => {
    expect(stackOne.min()).toBe(1);
    stackOne.push(0);
    expect(stackOne.min()).toBe(0);
    stackOne.pop();
    expect(stackOne.min()).toBe(1);
  });
});

describe("minQueue", () => {
  
});
