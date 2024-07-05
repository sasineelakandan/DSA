// function bSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//              let temp=arr[i]
//              arr[i]=arr[i+1]
//              arr[i+1]=temp
//              swapped=true
//             }
           
            
//         }
//     }while(swapped){
//         return arr
//     }
// }
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


// let arr=[-4,-8,-88,8,2,5,9,7]

// insertSort(arr)
// console.log(arr)

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pointer=arr[arr.length-1]
//     let left=[]
//     let rigth=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pointer){
//             left.push(arr[i])
//         }else{
//             rigth.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pointer,...quickSort(rigth)]
// }

// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }

//   let mid=Math.floor(arr.length/2)
//   let left=mergeSort(arr.slice(0,mid))
//   let right=mergeSort(arr.slice(mid))

//   return merge(left,right)
// }


// function merge(arr1,arr2){
//     let res=[]
//     while(arr1.length&&arr2.length){
//         if(arr1[0]<arr2[0]){
//           res.push(arr1.shift())
//         }else{
//             res.push(arr2.shift())
//         }
//     }
//     return [...res,...arr1,...arr2]
// }

// function selectionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }



// let arr=[-4,-8,-88,8,2,5,9,7]

// console.log(selectionsort(arr))

// class que{
//     constructor(){
//         this.item=[]
//     }

//     enque(ele){
//         this.item.push(ele)
//     }
//     deque(){
//         this.item.shift()
//     }
//     peek(){
//         console.log(this.item[0])
//     }
//     print(){
//         console.log(this.item)
//     }

// }

// const q=new que()
// q.enque(10)
// q.enque(20)
// q.enque(30)
// q.enque(40)
// q.enque(50)

// q.deque()
// q.peek()
// q.print()

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

//     enque(ele){
//         let node=new Node(ele)
//         if(this.size>0){
//             this.tail.next=node
//             this.tail=node
//         }else{
//             this.head=node
//             this.tail=node
//         }
//         this.size++
//     }

//     deque(){
//         this.head=this.head.next
//         this.size--
//     }

//     peek(){
//         console.log(this.head.val)
//     }
//     print(){
//         let current=this.head
//         while(current!==null){
//             console.log(current.val)
//             current=current.next
//         }
//     }
// }

// const list=new linkedlist()

// list.enque(10)
// list.enque(20)
// list.enque(30)
// list.enque(40)
// list.enque(50)
// list.deque()
// list.print()


// class stake{
//     constructor(){
//         this.item=[]
//     }

//     enque(ele){
//         this.item.push(ele)
//     }
//     deque(){
//         this.item.pop()
//     }
//     peek(){
//         console.log(this.item[0])
//     }
//     print(){
//         console.log(this.item)
//     }
// }

// const que=new stake()

// que.enque(10)
// que.enque(20)
// que.enque(30)
// que.deque()
// que.print()


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

//     prepend(val){
//         let node=new Node(val)
//         if(thiis.size>0){
//             node.next=this.head
//             this.head=node
//         }else{
//             this.head=node
//             this.tail=node
//         }
//         this.size++
//     }

//     delete(){
//         this.head=this.head.next
//         this.size--
//     }

//     peek(){
//         console.log(this.head.val)
//     }
// }

// class Hashtable{
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
//             this.table[index]=[[key,val]]
//         }else{
//             this.table[index].push([key,val])
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         return console.log(this.table[index][0][1])
//     }
//     remove(key){
//      let index=this.hash(key)
//      let bucket=this.table[index]
//      if(bucket){
//         const item=bucket.find((item)=>item[0]===key)
//         if(item){
//             bucket.splice(bucket.indexOf(item),1)
//         }
//      }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
           
//         }
//     }
// }

// const ht=new Hashtable(5)

// ht.set('name','sasi')
// ht.set('age',25)

// ht.print()




// class crdrfgq{
//     constructor(size){
//         this.item=new Array(size)
//         this.size=size
//         this.curentlength=0
//         this.front=0
//         this.rear=0
//     }

//     enque(ele){
       
//         this.item[this.rear] = ele

//         this.rear=(this.rear+1)%this.size
        
//         this.curentlength++
//     }

//     deque(){
//         let remove = this.item[this.front]
//         this.front=(this.front+1)%this.size
//         this.curentlength--
//         return remove
    
//     }

//     print(){
//         let queue=""
//         for(let i=0;i<this.curentlength;i++){
//             queue+=`${this.item[(this.front+i)%this.size]} `
//         }
//         console.log(queue)
//     }
// }

// const q=new crdrfgq(5)

// q.enque(10)
// q.enque(20)
// q.enque(30)
// q.enque(40)
// q.enque(80)
// q.print()
// console.log(q.deque())
// q.print()


// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }

//   let mid=Math.floor(arr.length/2)
//   let left=mergeSort(arr.slice(0,mid))
//   let right=mergeSort(arr.slice(mid))
//   return merge(left,right)
// }


// function merge(arr1,arr2){
//     let res=[]
//     while(arr1.length&&arr2.length){
//         if(arr1[0]<=arr2[0]){
//             res.push(arr1.shift())
//         }else{
//             res.push(arr2.shift())
//         }
//     }

//     return [...res,...arr1,...arr2]
// }

// let arr=[-1,-3,-2,-5,8,3,4,2]
// console.log(mergeSort(arr))


// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr=[-1,-3,-2,-5,8,3,4,2]
// console.log(quickSort(arr))


class circularq{
    constructor(size){
        this.item=new Array(size)
        this.size=size
        this.currentlength=0
        this.front=0
        this.rear=0
    }

    enque(ele){
      this.item[this.rear]=ele
      this.rear=(this.rear+1)%this.size
      this.currentlength++
    }

    deque(){
        this.front=(this.front+1)%this.size
        this.currentlength--
    }

    print(){
        let queue=''
        for(let i=0;i<this.currentlength;i++){
            queue+=` ${this.item[this.front+ i]}`
        }

        console.log(queue)
    }
}

let cq=new circularq(5)
cq.enque(10)
cq.enque(20)
cq.enque(30)
cq.enque(40)
cq.enque(50)
cq.deque()
cq.print()