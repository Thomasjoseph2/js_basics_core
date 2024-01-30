class MaxHeap{
    constructor(){

    }

    insert(value){
        this.values.push(value)
        this.bubbleUP()
    }
    bubbleUP(){
        let index=this.values.length-1;
        let element=this.values[index];

        while(index>0){
            let parent=Math.floor((index-1)/2)
            if(element<=this.values[parent]) break;
            else{
                this.values[index]=this.values[parent]
                this.values[parent]=element;
                index=parent
            }
        }
    }
    extractMax(){
       let end=this.values.pop()
       let max=this.values[0]
       if(this.values.length>0){
        this.values[0]=end;
        this.bubbleDown()
       }
       return max;
    }

    bubbleDown(){
        const element=this.values[0]
        let index=0

        while(true){
            let leftChild=index*2+1
            let rightChild=index*2+2
            let swap=null;
            if(leftChild<this.values.length){
                if(this.values[leftChild]<element) swap=leftChild
            }
            if(rightChild<this.values.length){
               if((swap!==null && this.values[rightChild]>leftChild)||(swap===null && this.values[rightChild]>element)){
                swap=rightChild
               }
            }
            if(swap===null) break;
            this.values[index]=this.values[swap];
            this.values[swap]=element;
            index=swap
        }
    }
    heapSort() {
        const sorted = [];
        const length = this.values.length; // Store the initial length
      
        for (let i = 0; i < length-1; i++) {
          sorted.push(this.extractMax());
        }
      
        return sorted;
      }
      
      
}

const heap=new MaxHeap()


heap.insert(55)
heap.insert(1)

console.log(heap);

console.log(heap.heapSort());