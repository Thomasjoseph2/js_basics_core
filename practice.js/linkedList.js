class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  addElem(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  pop() {
    let current = this.head;

    if (this.isEmpty()) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return current.value;
    } else {
      while (current.next.next !== null) {
        current = current.next;
      }

      let elem = current;
      this.tail = current;
      current.next = null;
      this.length--;

      return elem.value;
    }
  }
  shift() {
    let elem = this.head;
    this.head = this.head.next;
    this.length--;
    return elem;
  }

  insert(value, index) {
    const node = new Node(value);
    let i = 1;
    let current = this.head;
    while (index !== i) {
      current = current.next;
      i++;
    }
    node.next = current.next;
    current.next = node;
    this.length++;
  }

  secondLargest() {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let current = this.head;

    while (current) {
      if (current.value > largest) {
        secondLargest = largest;
        largest = current.value;
      } else if (current.value > secondLargest && current.value < largest)
        secondLargest = current.value;
      current = current.next;
    }
    return secondLargest;
  }
}

const list = new List();

list.addElem(100);
list.addElem(500);
list.addElem(800);
list.addElem(40);
list.addElem(10);
list.insert(1000, 3);
list.print();
console.log(list.secondLargest());
