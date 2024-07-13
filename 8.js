// class Node{
//     constructor(val){
//         this.val=val
//         this.left=null
//         this.right=null
//     }
// }


// class bst{
//     constructor(){
//         this.root=null
//     }
//     insert(val){
//         let node=new Node(val)
//       if(!this.root){
//         this.root=node
//         return this
//       }else{
//         let current=this.root
//         while(true){
//             if(val<current.val){
//                 if(current.left==null){
//                     current.left=node
//                     return this
//                 }else{
//                     current=current.left
//                 }
//             }else{
//                 if(current.right==null){
//                     current.right=node
//                     return this
//                 }else{
//                     current=current.right
//                 }
//             }
//         }
//       }
//     }

//     find(val){

//     }
// }
// const bt=new bst()

// bt.insert(50)
// bt.insert(90)
// bt.insert(70)
// bt.insert(40)
// bt.insert(30)
// bt.insert(20)
// bt.insert(60)





// console.log(JSON.stringify(bt.root))



// class MaxHeap{
//     constructor(){
//         this.values=[]
//     }

//     Insert(val){
//         this.values.push(val)
//         this.bubbleup()
//     }

//     bubbleup(){
//         let idx=this.values.length-1
//         let element=this.values[idx]
//         while(idx>0){
//             let parentidx=Math.floor(idx-1/2)
//             let parent=this.values[parentidx]
//             if(element<=parent){
//                 break
//             }
//             this.values[parentidx]=element
//             this.values[idx]=parent
//             idx=parentidx
//         }
//     }
// }

// const mh=new MaxHeap()
// mh.Insert(25)
// mh.Insert(85)
// mh.Insert(75)
// mh.Insert(95)
// mh.Insert(55)
// mh.Insert(35)
// mh.Insert(45)

// console.log(mh)


// class Node {
//     constructor(val, priority) {
//         this.val = val;
//         this.priority = priority;
//     }
// }

// class PriorityQ {
//     constructor() {
//         this.values = [];
//     }

//     insert(val, priority) {
//         let node = new Node(val, priority);
//         this.values.push(node);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
        
//         while (idx > 0) {
//             let parentIdx = Math.floor((idx - 1) / 2);
//             let parent = this.values[parentIdx];
//             if (element.priority <= parent.priority) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }

//     print() {
//         console.log(this.values);
//     }
// }

// const mh = new PriorityQ();
// mh.insert(25, 9);
// mh.insert(85, 7);
// mh.insert(75, 6);
// mh.insert(95, 11);
// mh.insert(55, 5);
// mh.insert(35, 2);
// mh.insert(45, 1);
// mh.print();
// console.log(mh);


// function recursion(arr,start=0,end=arr.length-1){
//     if(start>end){
//         return arr
//     }

//     [arr[start],arr[end]]=[arr[end],arr[start]]
//     return recursion(arr,++start,--end)
    
    
    
// }
// let arr=[1,2,3,4,5,6,7,9]
// console.log(recursion(arr))



// class graph{
//     constructor(){
//         this.adjanceylist={}
//     }

//     addvertex(vertex){
//         if(!this.adjanceylist[vertex]){
//             this.adjanceylist[vertex]=new Set()
//         }
//     }

//     addEdges(v1,v2){
//         this.addvertex(v1)
//         this.addvertex(v2)
//         this.adjanceylist[v1].add(v2)
//         this.adjanceylist[v2].add(v1)
//     }
//     removeedges(v1,v2){
//         this.adjanceylist[v1].delete(v2)
//         this.adjanceylist[v2].delete(v1)
//     }
//   removeVertex(vertex){
//     for(let neighbor of this.adjanceylist[vertex]){
//         this.removeedges(vertex,neighbor)
//     }
//     delete this.adjanceylist[vertex]
//   }

//   dfs(vertex){
//     let visited={}
//     let data=[]
//     let adjacencyList1=this.adjanceylist;
//     (function dfsh(v){
//        visited[v]=true
//        data.push(v)
//        adjacencyList1[v].forEach((neighbor)=> {
//           if(!visited[neighbor]){
//              return dfsh(neighbor)
//           }
//        });
//     })(vertex)
//     return data
//   }
// }

// const gh=new graph()

// gh.addEdges('A','B')
// gh.addEdges('B','C')
// gh.addEdges('C','A')

// console.log(gh.dfs('A'))

class MaxHeap{
    constructor(){
        this.values=[]
    }
    Insert(val){
        this.values.push(val)
        this.bubbleup()
    }
    bubbleup(){
        let idx=this.values.length-1
        let element=this.values[idx]
        while(idx>0){
            let parentidx=Math.floor(idx-1/2)
            let parent=this.values[parentidx]
            if(element<=parent){
                break
            }
            this.values[idx]=parent
            this.values[parentidx]=element
            idx=parentidx
        }
    }
}

const mh=new MaxHeap()
mh.Insert(40)
mh.Insert(20)
mh.Insert(30)
mh.Insert(70)
mh.Insert(50)

console.log(mh)