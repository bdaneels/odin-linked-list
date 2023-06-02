
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
  

  size() {
    let count = 0
    let current = this.head
    while (current) {
      current = current.nextNode
      count++
    }
    return count
  }

  getHead() {
    let head = this.head
    return head
  }

  getTail() {
    let tail = this.tail
    return tail
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

list.prepend('newhead')
list.append('tail')

console.log(list.getTail())






