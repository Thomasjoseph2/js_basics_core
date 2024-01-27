class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
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
      let parent = Math.floor((index - 1) / 2);
      if (element.priority >= this.values[parent].priority) break;
      this.values[index] = this.values[parent];
      this.values[parent] = element;
      index = parent;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    let element = this.values[0];

    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let swap = null;

      if (leftChild < this.values.length)
        if (this.values[leftChild].priority < element.priority) {
          swap = leftChild;
        }
      if (rightChild < this.values.length) {
        if (
          (swap === null && element.priority < this.values[rightChild]) ||
          (swap !== null &&
            this.values[rightChild].priority < this.values[leftChild].priority)
        ) {
          swap = rightChild;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const queue = new PriorityQueue();

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
