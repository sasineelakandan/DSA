// let a=[8,9,3,3,7,5,8]


// class hashtable{
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

//     set(key,val){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=a
//         }else{
//             this.table[index].push([key,val])
//         }
//     }

//     print(){
//         let arr=[]
//         for(let i=0;i<this.table.length;i++){
             
//              arr=this.table[i]
//             }

//             let b=[...new Set(arr)]
//             console.log(b)
//         }
      
//     }


// let ht=new hashtable(1)

// ht.set('arr',a)

// ht.print()

// let a=[
//     {
//         "id": 1,
//         "name": "John Doe",
//         "age": 20,
//         "major": "Computer Science",
//         "gpa": 3.5
//     },
//     {
//         "id": 2,
//         "name": "Jane Smith",
//         "age": 22,
//         "major": "Mechanical Engineering",
//         "gpa": 3.8
//     },
//     {
//         "id": 3,
//         "name": "Michael Johnson",
//         "age": 21,
//         "major": "Electrical Engineering",
//         "gpa": 3.6
//     },
//     {
//         "id": 4,
//         "name": "Emily Davis",
//         "age": 23,
//         "major": "Civil Engineering",
//         "gpa": 3.7
//     },
//     {
//         "id": 5,
//         "name": "David Brown",
//         "age": 24,
//         "major": "Mathematics",
//         "gpa": 3.9
//     }
// ]
  
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i].age>a[j].age){
//             let temp=a[i].age
//             a[i].age=a[j].age
//             a[j].age=temp
//         }
//     }
     
    
    
    
// }
// console.log(a)


// function stake(str){
//  let stake=[]
//  for(let i=0;i<str.length;i++){
//     stake.push(str[i])
//  }
//  let revstr=''
//  for(let i=0;i<str.length;i++){
//     revstr+=stake.pop()
//  }
//  console.log(revstr)
// }

// stake('sasi')

// let str='gtrrtyyyee'

// let  frequency={}
// for(let i=0;i<str.length;i++){
//     let count=1
//    for(let j=i+1;j<str.length;j++){
//     if(str[i]===str[j]){
//         count++
//     }
//     frequency[str[i]]=count
//    }
// }

// console.log(frequency)








// let str='gtrrtyyyee'

// let  frequency={}
// for(let i=0;i<str.length;i++){
//     if(frequency[str[i]]) frequency[str[i]]++
//     else frequency[str[i]]=1
// }
// console.log(frequency)


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
//       if(this.root==null){
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
//         let current=this.root
//         let found=false
//         while(current&&!found){
//             if(val<current.val){
//                 current=current.left
//             }
//             else if(current.val<val){
//                 current=current.right
//             }else{
//                 found=true
//                 return current
//             }
//         }
//     }
//     bfs(){
//         let node=this.root
//         let data=[]
//        let queue=[]
//        queue.push(node)
//        while(queue.length){
//         node=queue.shift()
//         data.push(node.val)
//         if(node.left){
//             queue.push(node.left)
//         }
//         if(node.right){
//             queue.push(node.right)
//         }
//        }
//        return data
//     }

//     dfs(){
//        let current=this.root
//        let data=[]
//        function tr(node){
        
//          if(node.left){
//             tr(node.left)
//          }
       
//          if(node.right){
//             tr(node.right)
//          }
//          data.push(node.val)
//        }
//        tr(current)
//        return data
//     }

//     finddegree(node){
//         let degree=0
        
//         if(node.left){
//             degree+=1
//         }
//         if(node.right){
//             degree+=1
//         }

//         return degree
//     }

//     findHight(node=this.root){
        
//         if(node==null){
//             return 0
//         }

//         let lefthight=this.findHight(node.left)
//         let righthight=this.findHight(node.right)
//         return Math.max(lefthight,righthight)+1
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




// console.log(bt.bfs())
// console.log(JSON.stringify(bt.root))


class Graph {
    constructor() {
        this.adjancylist = {};
    }

    addvertex(vertex) {
        if (!this.adjancylist[vertex]) {
            this.adjancylist[vertex] = new Set();
        }
    }

    addedege(v1, v2) {
        this.addvertex(v1);
        this.addvertex(v2);
        this.adjancylist[v1].add(v2);
        this.adjancylist[v2].add(v1);
    }

    removeEdge(v1, v2) {
        this.adjancylist[v1].delete(v2);
        this.adjancylist[v2].delete(v1);
    }

    removevertex(vertex) {
        for (let n of this.adjancylist[vertex]) {
            this.removeEdge(vertex, n);
        }
        delete this.adjancylist[vertex];
    }

    dfs(vertex) {
        let visited = {};
        let data = [];
        let adjacencyList = this.adjancylist;

        (function dfsH(v) {
            visited[v] = true;
            data.push(v);
            adjacencyList[v].forEach((n) => {
                if (!visited[n]) {
                    dfsH(n);
                }
            });
        })(vertex);  // Immediately invoke dfsH with the starting vertex

        return data;
    }
}

const graph1 = new Graph();

graph1.addedege("A", "B");
graph1.addedege("B", "C");
graph1.addedege("C", "A");

graph1.removeEdge('A', 'B');  // Fixed this line to include both vertices

console.log(graph1.dfs("A"));  // Corrected the method name
