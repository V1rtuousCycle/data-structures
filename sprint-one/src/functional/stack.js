var Stack = function() {
  var newInstance = {};
  var storage = {};
  var size = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // newInstance.size = sizeFunc;
  // newInstance.push = push;
  // newInstance.pop = pop;

  newInstance.push = function(val) {
    storage[size] = val;
    size++;
  };
  newInstance.pop = function() {
    size--;
    return storage[size];
  };
  newInstance.size = function() {
    return (size >= 0 ? size : 0);
  }

  return newInstance;
  // var someInstance = {};

};

// pop() - error/undefined - undefined
// push(22) - return - {0 : 22}
// size - 1 - {0 : 22}
// push(17) - return - {0:22, 1:17}
// pop - 17 - {0:22}
// pop - 22 - {}
// size - 0 - {}



