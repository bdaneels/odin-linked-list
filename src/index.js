
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
    
    prepend(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        newNode.nextNode = this.head;
        this.head = newNode;
        }
  }
  

  removeFromHead() {
    if (this.head === null) {
      return null;
    }

    const removedValue = this.head.value;
    this.head = this.head.nextNode;

    if (this.head === null) {
      this.tail = null;
    }

    return removedValue;
  }

  print() {
    let current = this.head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.nextNode;
    }

    console.log(values.join(' -> '));
  }
}


const list = new LinkedList();
list.append('f');
list.append('g');
list.append(';');

list.prepend('head')

list.print(); // Output: 1 -> 2 -> 3

list.removeFromHead();
list.print(); // Output: 2 -> 3






