var Queue = function() {
  this.qSize = 0;
  this.storage = {};
  this.offset = 0;
};

Queue.prototype={
  constructor : Queue
};

Queue.prototype.size = function () {
  return this.qSize;
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.qSize + this.offset] = value;
  this.qSize++;
  }

Queue.prototype.dequeue = function () {
  this.qSize = this.qSize >= 1 ? this.qSize - 1 : 0;
  this.offset++;
  return this.storage[this.offset - 1]
}







