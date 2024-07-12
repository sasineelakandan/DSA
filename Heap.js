class MaxHeap1 {
    constructor() {
      this.heap = [];
    }
  
    build(arr) {
      
      this.heap = arr;
      for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
        this.heapifyDown(i);
      }
      
    }
  
    inserting(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    heapifyUp(idx) {
      let parentIdx = Math.floor((idx - 1) / 2);
  
      if (parentIdx && this.heap[parentIdx] < this.heap[idx]) {
        [this.heap[idx], this.heap[parentIdx]] = [ this.heap[parentIdx],this.heap[idx],];
        this.heapifyUp(parentIdx);
      }
    }
  
    heapifyDown(idx) {
      let parentIdx = idx;
  
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
  
      if (
        leftChildIdx < this.heap.length &&
        this.heap[leftChildIdx] > this.heap[parentIdx]
      ) {
        parentIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.heap.length &&
        this.heap[rightChildIdx] > this.heap[parentIdx]
      ) {
        parentIdx = rightChildIdx;
      }
      if (parentIdx !== idx) {
        [this.heap[idx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[idx],
        ];
        this.heapifyDown(parentIdx);
      }
    }
  }

  const mh=new MaxHeap1()
  mh.inserting(8)
  mh.inserting(4)
  mh.inserting(5)
  mh.inserting(6)

  console.log(mh.values)