//  let a='sasi' 
//  let b=a.split('')
//  console.log(b)
// for(i=0,j=b.length-1;i<b.length/2;i++,j--){
//     let temp=b[i]
//     b[i]=b[j]
//     b[j]=temp
// }

// console.log(b.join(''))


// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }


// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(val){
//        let node= new Node(val)
//        if(this.size>0){
//         this.tail.next=node
//         this.tail=node
//        }else{
    
//         this.head=node
//         this.tail=node
//        }
//        this.size++
//     }


//     prepend(val){
//         let node= new Node(val)
//         if(this.size>0){
//             node.next=this.head

//         }else{
//             this.head=node
//             this.tail=null
//         }
//         this.size++

//     }


// }


// const list= new linkedlist()

// list.append(10)
// list.append(20)

// console.log(JSON.stringify(list.head))



// function binarySearch(arr,t){
//   arr.sort((a,b)=>a-b)
//   leftindex=0
//   rightindex=arr.length-1
//   while(leftindex<=rightindex){
//     let midval=Math.floor((leftindex+rightindex)/2)
//     if(t===arr[midval]){
//         return midval
//     }
//     if(t<arr[midval]){
//         rightindex=midval-1
//     }else{
//         leftindex=midval+1
//     }
//   }
// }


// console.log(binarySearch([1,2,3,4,5],4))


// let a='sasi'
// let b=a.split('')
// // let c=['a','e','i','o','u']
// let regex = /[aeiou]/
// let count=0
// for(let i=0;i<b.length;i++){
//     if(regex.test(b[i])){
//         count++
//     }
// }

// console.log(count)

// function insertSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let insert=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>insert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=insert
//     }
// }

// let arr=[-8,-3,-1,-5,8,9,3,2]

// insertSort(arr)
// console.log(arr)

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }


//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }

//         return total%this.size
       
//     }
    
//     lenearproping(index){
//         let ind=index
//         let i=1
//         while(index<this.size){
//             index=ind+i
//             if(this.table[index]===undefined){
//                 return index
//             }
//             i++
//         }
//         return -1
//     }
//     set(key,val){
//         let index=this.hash(key)
//         index=this.lenearproping(index)
//     this.table[index]=[key,val]
       
        
//     }

    // get(key){
    //     let index=this.hash(key)

    //     return console.log(this.table[index][0][1])
    // }

    // remove(key){
    //     let index=this.hash(key)
    //     let bucket=this.table[index]
    //     if(bucket){
    //         const item=bucket.find((item)=>item[0]===key)
    //         if(item){
    //             bucket.splice(bucket.indexOf(item),1)
    //         }
    //     }
    // }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }


// const ht=new HashTable(50)
// ht.set('name','sasi')
// ht.set('age',23)

// ht.print()

// function bSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
          
//         }
//     }while(swapped){
//         return arr
//     }
// }

// let arr=[-1,-2,-4,-8,8,4,1,3]

// console.log(bSort(arr))


// function stake(Str){
//     let stake=[]
// for(i=0;i<Str.length;i++){
//     stake.push(Str[i])
// }
// let str=''
//  for(let i=0;i<Str.length;i++){
//     str+=stake.pop()
//  }

//  return str
// }

// console.log(stake('sasi'))

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex] =new Set()
        }
      } // Time: O(1) | Space: O(1)
    
      addEdges(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
    
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
      }
      removeEdges(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
      } 
      removeVertex(vertex){
        let adjacencyList=this.adjacencyList
        for(let n of adjacencyList[vertex]){
            this.removeEdges(vertex,n)
        }
           
        delete this.adjacencyList[vertex]
      }
   dfs(vertex){
     let visited={}
     let data=[]
     let adjacencyList=this.adjacencyList;
     (function dfs(v){
        visited[v]=true
        data.push(v)
        adjacencyList[v].forEach((n) => {
            if(!visited[n]){
                return dfs(n)
            }
        });
     })(vertex)
     return data
   }

   bfs(vertex) {
    let visited = {};
    let data = [];
    let queue = [vertex];

    visited[vertex] = true; // Mark the starting vertex as visited

    while (queue.length) {
        let curr = queue.shift();
        data.push(curr);

        for (let neighbor of this.adjacencyList[curr]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true; // Mark the neighbor as visited when it's added to the queue
            }
        }
    }

    return data;
}
}

const v = new Graph();

v.addEdges('A', 'B');
v.addEdges('B', 'C');
v.addEdges('C', 'A');

console.log(v.bfs('A'));
