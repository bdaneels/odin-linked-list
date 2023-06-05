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

  insertAt(index, value) {
  if (index === 0) {
    this.prepend(value);
    return;
  }

  const newNode = new Node(value);
  let current = this.head;
  let previous = null;
  let currentIndex = 0;

  while (current && currentIndex < index) {
    previous = current;
    current = current.nextNode;
    currentIndex++;
  }

  if (currentIndex === index) {
    previous.nextNode = newNode;
    newNode.nextNode = current;
    if (current === null) {
      this.tail = newNode;
    }
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

  removeAt(index) {
  if (index === 0) {
    this.removeFromHead();
    return;
  }

  
  let current = this.head;
  let previous = null;
  let currentIndex = 0;

  while (current && currentIndex < index) {
    previous = current;
    current = current.nextNode;
    currentIndex++;
  }

  if (currentIndex === index) {
    previous.nextNode = current.nextNode;
    if (current === null) {
      this.tail = previous;
    }
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

  contains(value) {
    
    let current = this.head
    for (let i = 0; i < this.size(); i++) {
      if (current.value === value) {
        return true

      } else {
        current = current.nextNode
      }
      
    }
    return false
  }

  find(value) {
    
    let current = this.head
    for (let i = 0; i < this.size(); i++) {
      if (current.value === value) {
        return i

      } else {
        current = current.nextNode
      }
      
    }
    return null
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    const removedValue = this.tail.value;
    let penultimateNodeIndex = this.size() - 2

    let current = this.head
    for (let i = 0; i < this.size(); i++){
      if (penultimateNodeIndex === i) {
        
        current.nextNode = null
        this.tail = current
        break

      } else {
        current = current.nextNode
      }
    }

    

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
list.append('h');


list.removeAt(1)

list.print()







