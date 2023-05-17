class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = [];
    this._size = 0;
  }

  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    this._size--;
    let lastValue = this._storage[this._size];
    delete this._storage[this._size];
    return lastValue;
  }

  size() {
    if (this._size <= 0) {
      return 0;
    }
    return this._size;
  }
}