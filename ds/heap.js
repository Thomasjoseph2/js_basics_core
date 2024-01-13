class Maxheap {
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
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
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
    let length = this.values.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftchild, rightchild;
      let swap = null;
      if (leftChildIndex < length) {
        leftchild = this.values[leftChildIndex];
        if (leftchild > element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightchild = this.values[rightChildIndex];

        if (
          (swap === null && rightchild > element) ||
          (swap !== null && rightchild > leftchild)
        ) {
            swap=rightChildIndex
        }
      }
      if(swap===null) break;
      this.values[index]=this.values[swap];
      this.values[swap]=element;
      index=swap;
    }
  }
}

const heap = new Maxheap();

heap.insert(55);
heap.insert(1);
heap.extractMax()
heap.extractMax()
console.log(heap);

