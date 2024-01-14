class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

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

  it('it can pop off', () => {
    stack.pop('avocado');
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(null);
  });
});
