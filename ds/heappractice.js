class MaxHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (element <= this.values[parentIndex]) break;
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let swap = null;
      if (leftChildIndex < this.values.length) {
        if (this.values[leftChildIndex] > element) {
          swap = leftChildIndex;
        }
      }
      if (
        (swap === null && this.values[rightChildIndex] > element) ||
        (swap !== null &&
          this.values[rightChildIndex] > this.values[leftChildIndex])
      ) {
        swap=rightChildIndex
      }
      if(swap===null)break;
      this.values[index]=this.values[swap];
      this.values[swap]=element;
      index=swap;
    }
  }
}

const heap = new MaxHeap();

heap.insert(55);
heap.insert(1);
console.log(heap);
heap.extractMax()
heap.extractMax()
heap.extractMax()
console.log(heap);
