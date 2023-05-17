var Stack = function() {
  let someInstance = {};

  someInstance._storage = [];
  someInstance._size = 0;
  _(someInstance).extend(stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this._storage[this._size] = value;
    this._size++;
  },

  pop: function() {
    // if (this._size === 0) {
    //   return undefined;
    // }
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


// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.

//   var someInstance = {};
//   _(someInstance).extend(stackMethods);

//   someInstance._storage = {};
//   someInstance._size = 0;

//   return someInstance;
//   };

// var stackMethods = {};


// stackMethods.push = function(value) {
//   this._storage[this._size++] = value;
// };

// stackMethods.pop = function() {
//   this._size && this._size--;
//   var result = this._storage[this._size];

//   delete this._storage[this._size];

//   return result;
// };

// stackMethods.size = function() {
//   return this._size;
// };