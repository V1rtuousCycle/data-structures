var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var qSize = 0;
  var offset = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[qSize + offset] = value;
    qSize++;
  };
  // push
  someInstance.dequeue = function() {
    qSize--;
    offset++;
    return storage[offset - 1];
  };
  // shift

  someInstance.size = function() {
    return qSize >= 0 ? qSize : 0;
  };

  return someInstance;
};

// [a,b]
  // dequeue()
    // offset = 1 , size = 1
    // return offset - 1
  // enqueue(c)
    // size = 2
// [a,b,c]
  // dequeue()
    // offset=2, size = 1
    // return offset - 1;





// dequeue() - returns error? - {} // offset 0
// size - 0 - {}
// enqueue(22) - return - {0:22}
// enqueue(7) - return - {0:22, 1:7}
// size - 2
// dequeue() - returns 22 - {0:7} // offset 1
// dequeue() - returns 7 - {} // offset 2
// dequeue() - returns error? - {} // offset 3

