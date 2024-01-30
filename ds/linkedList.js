const { toArray } = require("lodash");

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
    this.size = 0;
  }

  addElem(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  delete(value) {
    let current = this.head;

    if (this.size === 0) return null;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return current;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return current;
    }
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    const item = current.next;
    if (current.next === null) this.tail = current;
    else current.next = current.next.next;
    return item;
  }

  largest() {
    let largest = -Infinity;
    let current = this.head;
    while (current) {
      if (current.value > largest) largest = current.value;
      current = current.next;
    }
    return largest;
  }

  secondLargest() {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let current = this.head;
    while (current) {
      if (current.value > largest) {
        secondLargest = largest;
        largest = current.value;
      } else if (current.value < largest && current.value > secondLargest) {
        secondLargest = current.value;
      }
      current = current.next;
    }
    return secondLargest;
  }

  middleElem() {
    let slowpointer = this.head;
    let fastPointer = this.head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowpointer = slowpointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowpointer.value;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new List();
const list2 = new List();

list.addElem(10);
list.addElem(20);
list.addElem(30);
list.addElem(40);
list.addElem(57);
list.addElem(60);
list.addElem(70);
list2.addElem(38);
list2.addElem(50);
list2.addElem(80);
list2.addElem(100);
list2.addElem(572);
list.reverse();

list.print();
let list3 = mergeSortedLists(list, list2);
// list3.print()

function mergeSortedLists(list1, list2) {
  const arr = [];
  const list3 = new List();
  listToArray(list1, arr);
  listToArray(list2, arr);
  arr.sort((a, b) => a - b);
  for (var i = 0; i < arr.length; i++) {
    list3.addElem(arr[i]);
  }
  return list3;
}

function listToArray(list, arr) {
  let current = list.head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}
