// class Heap {
//     constructor() {
//         this.heap = [];
//     }

//     build(arr) {
//         this.heap = arr;
//         for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
//             this.heapfyDown(i);
//         }
//     }

//     inserting(val) {
//         this.heap.push(val);
//         this.bubbleup(this.heap.length - 1);
//     }

//     bubbleup(idx) {
//         if (idx <= 0) return; // Base condition to stop recursion

//         let parentIdx = Math.floor((idx - 1) / 2);

//         if (this.heap[parentIdx] < this.heap[idx]) {
//             [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
//             this.bubbleup(parentIdx); // Continue bubbling up if necessary
//         }
//     }
// }

// class Heap {
//     constructor() {
//         this.Heap = [];
//     }

//     insert(val) {
//         this.Heap.push(val);
//         this.bubbleup(this.Heap.length - 1);
//     }

//     bubbleup(idx) {
//         let parentidx = Math.floor((idx - 1) / 2);
//         if (idx > 0 && this.Heap[parentidx] < this.Heap[idx]) {
//             [this.Heap[parentidx], this.Heap[idx]] = [this.Heap[idx], this.Heap[parentidx]];
//             this.bubbleup(parentidx);
//         }
//     }

//     build(arr) {
//         this.Heap = arr;
//         for (let i = Math.floor(this.Heap.length / 2) - 1; i >= 0; i--) {
//             this.bubbledown(i);
//         }
//     }

//     bubbledown(idx) {
//         let largest = idx;
//         let leftChildIdx = 2 * idx + 1;
//         let rightChildIdx = 2 * idx + 2;

//         if (leftChildIdx < this.Heap.length && this.Heap[leftChildIdx] > this.Heap[largest]) {
//             largest = leftChildIdx;
//         }
//         if (rightChildIdx < this.Heap.length && this.Heap[rightChildIdx] > this.Heap[largest]) {
//             largest = rightChildIdx;
//         }

//         if (largest !== idx) {
//             [this.Heap[largest], this.Heap[idx]] = [this.Heap[idx], this.Heap[largest]];
//             this.bubbledown(largest);
//         }
//     }

//     removeMax() {
//         if (this.Heap.length === 0) return null;
//         if (this.Heap.length === 1) return this.Heap.pop();

//         const max = this.Heap[0];
//         this.Heap[0] = this.Heap.pop();
//         this.bubbledown(0);

//         return max;
//     }
// }

// let mh = new Heap();
// mh.insert(8);
// mh.insert(4);
// mh.insert(5);
// mh.insert(6);
// console.log("Heap before removal:", mh.Heap);
// function sort() {
//     const sortarr = [];
//     while (mh.Heap.length > 0) {
//         sortarr.unshift(mh.removeMax());
//     }
//     return sortarr;
// }
// console.log(sort())


class Heap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleup(this.heap.length - 1); 
    }

    bubbleup(idx) {
        let parentidx = Math.floor((idx - 1) / 2);
        if (idx > 0 && this.heap[parentidx] > this.heap[idx]) {
            [this.heap[parentidx], this.heap[idx]] = [this.heap[idx], this.heap[parentidx]];
            this.bubbleup(parentidx);
        }
    }
    remove(){
         let max=this.heap[0]
         this.heap[0]=this.heap.pop()
         this.bubbledown(0)
         return max

    }
    bubbledown(idx){
        let parentIdx=idx
        let leftChildIdx=2*idx+1
        let rightindex=2*idx+2

        if(leftChildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[leftChildIdx]){
            parentIdx=leftChildIdx
        }
        if(rightindex<this.heap.length&&this.heap[parentIdx]>this.heap[rightindex]){
            parentIdx=rightindex
        }
        if(parentIdx!==idx){
            [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
            this.bubbledown(parentIdx)
        }
    }
}

let mh = new Heap();
mh.insert(8);
mh.insert(4);
mh.insert(5);
mh.insert(6);
mh.insert(10);
mh.remove()
console.log(mh.heap);




