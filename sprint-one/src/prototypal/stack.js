var stackMethods = {
  size: function() {
    return this.stackSize >= 0 ? this.stackSize : 0;
  },
  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  pop: function() {
    this.stackSize--;
    this.offSet++;

    return this.storage[this.stackSize];
  }
};

var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.offSet=0;
  newStack.storage = {};

  // var testClosure='found';
  // newStack.findClosure = function () {
  //   console.log('closure lookup = ',testClosure);
  // }

  return newStack;
};

var stackInstance = Stack();

// {}
// push(a) // {0:a}
// push(b) //  {0:a, 1 : b} size =2
// pop     // {0:a, 1:b} size = 1 // return 1:b
// pop //  {0:a, 1:b, 2:c, 3:d, 4:e} size = 0 // 0 : a
// push( c) //
//
