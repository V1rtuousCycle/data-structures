var Stack = function() {
  this.stackSize= 0;
  this.storage= {};

};


Stack.prototype = {
  push : function (value) {
    this.storage[this.stackSize]=value;
    this.stackSize++;

  },
  pop : function () {
    this.stackSize--;
    return this.storage[this.stackSize];
  },
  size : function () {
    return this.stackSize >= 0 ? this.stackSize : 0 ;
  },
  constructor : Stack
};

//Stack.prototype.constructor = Stack;

console.log(Stack.prototype.constructor);
//var newStack = new Stack(0,{});

