class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = [];
    this._size = 0;
    this._first = 0;
  }

  enqueue(value) {
    this._storage[this._size + this._first] = value;
    this._size++;
  }

  dequeue() {
    if (this._size === 0) {
      return undefined;
    }
    let dequeuedValue = this._storage[this._first];
    delete this._storage[this._first];
    this._first++;
    this._size--;
    return dequeuedValue;
  }

  size() {
    if (this._size <= 0) {
      return 0;
    }
    return this._size;
  }
}
