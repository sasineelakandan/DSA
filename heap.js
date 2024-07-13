// class MinHeap {
//     constructor() {
//         this.values = [];
//     }

//     insert(val) {
//         this.values.push(val);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while (idx > 0) {
//             let parentIdx = Math.floor((idx - 1) / 2);
//             let parent = this.values[parentIdx];
//             if (element >= parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     remove(){
//        let 
    

    
  
// }

// function heapSort(arr) {
  
// }

// const hp = new MinHeap();

// hp.insert(3);
// hp.insert(68);
// hp.insert(8);
// hp.insert(99);
// hp.insert(55);
// hp.insert(69);

// console.log(hp.values)
// console.log("Sorted values:", heapSort(hp.values))




// class MaxHeap {
//     constructor() {
//         this.values = [];
//     }

//     Insert(val) {
//         this.values.push(val);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let idx = this.values.length - 1;
//         let element = this.values[idx];
        
//         while (idx > 0) {
//             let parentIdx = Math.floor((idx - 1) / 2);
//             let parent = this.values[parentIdx];
//             if (element <= parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }

//     remove() {
//         const max = this.values[0];
//         const end = this.values.pop();
        
//         if (this.values.length > 0) {
//             this.values[0] = end;
//             this.bubbleDown();
//         }
        
//         return max;
//     }

//     bubbleDown() {
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];

//         while (true) {
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if (leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if (leftChild > element) {
//                     swap = leftChildIdx;
//                 }
//             }

//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if (
//                     (swap === null && rightChild > element) ||
//                     (swap !== null && rightChild > leftChild)
//                 ) {
//                     swap = rightChildIdx;
//                 }
//             }

//             if (swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// const hp = new MaxHeap();
// hp.Insert(55);
// hp.Insert(65);
// hp.Insert(75);
// hp.Insert(35);
// hp.Insert(25);
// console.log("Heap before removal:", hp.values);

// const removed = hp.remove(25);
// console.log("Removed element:", removed);
// console.log("Heap after removal:", hp.values);


// hp.Insert(55)
// hp.Insert(65)
// hp.Insert(75)
// hp.Insert(35)
// hp.Insert(25)

// console.log(hp)