var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(stackMethods)

  someInstance._storage = [];
  someInstance._size = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this._storage[this._size] = value;
    this._size++;
  },

  pop: function() {
    this._size--;
    let lastValue = this._storage[this._size];
    delete this._storage[this._size];
    return lastValue;
  },

  size: function() {
    if (this._size <= 0) {
      return 0;
    }
    return this._size;
  }
};


