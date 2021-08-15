const num = (number) => (number === 0 || Boolean(number));

export default class Heap {
  constructor(values=[]) {
    this.stack = [];
    this.length = 0;
    for(let i = 0; i < values.length; i++) {
      this.add(values[i]);
    };
  };

  add = (value) => {
    /* Function will add a value to the min-heap. */
    this.stack.push(value);
    let length = this.length,
      parentIndex = Math.floor((length - 1) / 2);

    while (length > -1) {
      if (this.stack[length] < this.stack[parentIndex]) {
        let last = this.stack[length]
        this.stack[length] = this.stack[parentIndex]
        this.stack[parentIndex] = last
      }
      length = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    this.length += 1
  };

  getMin = () => {
    /* Function will remove the value from the top of the heap. */
    if (this.length === 0) {
      return null;
    }

    this.length -= 1;
    const returnValue = this.stack[0];
    this.stack[0] = this.stack[this.length];
    let index = 0, nextIndex = index * 2 + 1, top = this.stack.pop();

    while ( nextIndex < this.length) {
      if (num(this.stack[nextIndex + 1])) {
        console.log(45, this.stack[nextIndex], this.stack[nextIndex+ 1], this.stack[nextIndex] > this.stack[nextIndex + 1]);

        if (this.stack[nextIndex] > this.stack[nextIndex + 1]) {
          nextIndex = nextIndex + 1;
        }
        this.stack[index] = this.stack[nextIndex];
        this.stack[nextIndex] = top;
      } else if (this.stack[index] > this.stack[nextIndex]) {
        this.stack[index] = this.stack[nextIndex]
        this.stack[nextIndex] = top;
      }

      index = nextIndex;
      nextIndex = nextIndex * 2 + 1;
    }
    return returnValue;
  }

  peek = () => {
    /* Function will return the value at the front of the heap if one exists. */
    if (this.length > 0) {
      return this.stack[0];
    }
    return null;
  }
}
