var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;
  let first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size + first] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return undefined;
    }
    let dequeuedValue = storage[first];
    delete dequeuedValue;
    first++;
    size--;
    return dequeuedValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
