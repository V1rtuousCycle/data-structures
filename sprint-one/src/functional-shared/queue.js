var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};

  newQueue.storage = {};
  newQueue.qSize = 0;
  newQueue.offset = 0;

  extend(newQueue, queueMethods);


  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {

};

queueMethods.enqueue = function (value) {
  this.storage[this.qSize+this.offset] = value;
  this.qSize++;
}

queueMethods.dequeue = function () {
  this.qSize = this.qSize > 0 ? this.qSize-1 : 0;
  this.offset = this.offset+1 ;
  return this.storage[this.offset - 1];
}

queueMethods.size = function () {
  return this.qSize;
}



