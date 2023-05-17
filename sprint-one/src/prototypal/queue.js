var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);

  someInstance._storage = [];
  someInstance._size = 0;
  someInstance._first = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this._storage[this._size + this._first] = value;
    this._size++;
  },

  dequeue: function() {
    if (this._size === 0) {
      return undefined;
    }
    let dequeuedValue = this._storage[this._first];
    delete this._storage[this._first];
    this._first++;
    this._size--;
    return dequeuedValue;
  },

  size: function() {
    return this._size;
  }
};


