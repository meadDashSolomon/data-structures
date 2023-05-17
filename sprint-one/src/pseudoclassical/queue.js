var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = [];
  this._size = 0;
  this._first = 0;
};

Stack.prototype.push = function (value) {
  this._storage[this._size + this._first] = value;
  this._size++;
}

Stack.prototype.pop = function () {
  if (this._size === 0) {
    return undefined;
  }
  let dequeuedValue = this._storage[this._first];
  delete this._storage[this._first];
  this._first++;
  this._size--;
  return dequeuedValue;

Stack.prototype.size = function () {
  return this._size;
}
