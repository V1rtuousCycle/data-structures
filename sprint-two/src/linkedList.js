
// 4 -> 5
// { value : 4,
//    next: {
//   value : 5,
//   next : null}
// }

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // inserts a new 'Node' into the list



    // check if there is a tail
    if (list.tail === null) {
      // if not
        // set tail to equal new node
        list.tail = Node(value);
        list.head = list.tail;

    } else {

      var newTail = Node(value);
      // list.tail.next = newTail;
      list.tail.next = newTail;
      list.tail = newTail;
    }


  };

  // .removeHead() method, removes the first node from the list and returns its value
  list.removeHead = function() {
    // if there is a head, removes the head and assigns the heads pointer to be the new head
    var r = list.head.value;
    // set head to be head.next
    list.head = list.head.next;
    //return list.head;
    return r;
  };

  list.contains = function(target, node = list.head, found = false) {
    // iterates through the list and checks if each value is a target

    if (node.value === target) {
      found = true;
    }

    // console.log('current node = ',node.value);
    // console.log('found = ',found);
    // console.log('node.next = ',node.next);

    if (node.next !== null && found === false) {
      found=list.contains(target, node.next);
    }
    return found;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var newLinkedList = LinkedList();
newLinkedList.addToTail(4);
newLinkedList.addToTail(5);
newLinkedList.addToTail(6);
console.log(newLinkedList.contains(4));


/*
 * Complexity: What is the time complexity of the above functions?
 */
