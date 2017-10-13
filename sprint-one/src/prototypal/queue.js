var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.qSize = 0;
  newQueue.offset = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.qSize;
  },
  enqueue: function(val) {
    this.storage[this.qSize + this.offset] = val;
    this.qSize++;
  },
  dequeue: function() {
    this.qSize = this.qSize >= 1 ? this.qSize - 1 : 0;
    this.offset++;
    return this.storage[this.offset - 1];
  }
};


