const e = require("express");

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (element.priority >= this.values[parentIndex].priority) break;
      else {
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = element;
        index = parentIndex;
      }
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    const element = this.values[0];

    while (true) {
      let swap = null;
      let leftChild = index * 2 + 1;
      let rightchild = index * 2 + 2;

      if (leftChild < this.values.length) {
        if (this.values[leftChild].priority < element.priority) {
          swap = leftChild;
        }
      }
      if (rightchild < this.values.length) {
        if (
          (swap === null &&
            this.values[rightchild].priority < element.priority) ||
          (swap !== null && this.values[rightchild].priority < this.values[leftChild].priority)
        ) {
          swap = rightchild;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const queue = new priorityQueue();

queue.enqueue("heart attack", 1);
queue.enqueue("fracture", 3);
queue.enqueue("gunshot", 2);
queue.enqueue("dog bite", 7);
queue.enqueue("scrach", 10);
queue.enqueue("baby bite", 8);
queue.enqueue("aligator bite", 4);


console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
