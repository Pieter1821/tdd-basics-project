class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  // Changed the double curly braces to single curly braces
  get peek() {
    if (this.top > -1) {
      return this.items[this.top];
    }
    return null;
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  // Added the pop method to remove the top element from the stack
  pop() {
    if (this.top > -1) {
      const value = this.items[this.top];
      delete this.items[this.top];
      this.top -= 1;
      return value;
    }
    return null;
  }
}

describe('My Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('avocado');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('avocado');
  });

  it('can pop off', () => {
    stack.push('avocado');
    const poppedValue = stack.pop();
    expect(poppedValue).toBe('avocado');
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(null);
  });
});