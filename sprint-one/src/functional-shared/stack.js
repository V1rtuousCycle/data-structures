var Stack = function() {
  var newInstance = {};
  newInstance.storage = {};
  newInstance.stackSize = 0;

  // newInstance.size = sizeFunc;
  // newInstance.push = push;
  // newInstance.pop = pop;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  extend(newInstance,sharedMethods)
  console.log('newInstance = ',newInstance)
  return newInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var sharedMethods = {
  push : function(val) {
    this.storage[this.stackSize] = val;
    this.stackSize++;
  },
  pop : function() {
    this.stackSize--;
    return this.storage[this.stackSize];
  },
  size : function() {
    return this.stackSize >= 0 ? this.stackSize : 0;
  }
}

  // var push = function(val) {
  //   this.storage[size] = val;
  //   this.size++;
  // };
  // var pop = function() {
  //   this.size--;
  //   return this.storage[size];
  // };
  // var sizeFunc = function() {
  //   return this.stackSize ;
  //   //return (this.size >= 0 ? this.size : 5);
  // }

// var storage = {};
// storage[stackSize] = 22;
// var stackSize = 27;
// var oneStack = Stack();
