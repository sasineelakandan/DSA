// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     prepend(val){
//         let node= new Node(val)
//         if(this.size>0){
//             node.next=this.head
           
//         }else{
//             this.tail=node
//         }
//         this.head=node
//         this.size++

//     }
//     append(val){
//         let node=new Node(val)
//         if(this.size>0){
//             this.tail.next=node
//             this.tail=node
//         }else{
//             this.head=node
//             this.tail=node
//         }
//         this.size++
//     }
//     pop(){
//         let current=this.head
//         while(current.next!==this.tail){
//             current=current.next
//         }
//         current.next=null
//         this.tail=current
//         this.size--
//     }
//     shift(){
//         this.head=this.head.next
//         this.size--
//     }
//     getindex(index){
//        let current=this.head
//        let currentindex=0
//        while(current){
//         if(currentindex===index){
//             return current.val
//         }
//         current=current.next
//         currentindex++
//        }
//     }
//     midval(){
//         let slow=this.head
//         let fast=this.head
//         while(fast!==null&&fast.next==null){
//             slow=slow.next
//             fast=fast.next.next

//         }
//         console.log(slow.val)
//     }
//     pull(val){
        
//         let current=this.head
//         while(current!==null&&current.next!==null){
//             if(current.next.val===val){
//                 current.next=current.next.next
//                 this.size--
//             }else{
//                 current=current.next
//             }
//         }
//     }
//     reverse(){
//         let current=this.head
//         let prev=null

//         while(current){
//             let temp=current.next
//             current.next=prev
//             prev=current
//             current=temp
//         }
//         this.head=prev
//     }
    
    
// }

// const list=new LinkedList()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.append(60)

// console.log(list.getindex(4))
// list.reverse()
// console.log(JSON.stringify(list.head))

// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         if (!this.head) {
//             this.head = new ListNode(value);
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = new ListNode(value);
//         }
//     }

//     print() {
//         let current = this.head;
//         let output = [];
//         while (current) {
//             output.push(current.value);
//             current = current.next;
//         }
//         console.log(output.join(" -> "));
//     }

//     reverseRecursive() {
//         this.head = this._reverseRecursiveHelper(this.head);
//     }

//     _reverseRecursiveHelper(node) {
//         // Base case: if the list is empty or has only one node
//         if (node === null || node.next === null) {
//             return node;
//         }

//         // Recursively reverse the rest of the list
//         let newHead = this._reverseRecursiveHelper(node.next);

//         // Reverse the pointers
//         node.next.next = node;
//         node.next = null;

//         return newHead;
//     }
// }

// // Example usage
// let list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);

// console.log("Original List:");
// list.print();

// list.reverseRecursive();

// console.log("Reversed List:");
// list.print();

// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
        
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     prepend(val){
//      let node= new Node(val)
//      if(this.size>0){
//         node.next=this.head
//      }else{
//         this.tail=node
//      }
//      this.head=node
//      this.size++
//     }
//     append(val){
//         let node= new Node(val)
//         if(this.size>0){
//             this.tail.next=node
//             this.tail=node
//         }else{
//             this.head=node
//             this.tail=node
//         }
//         this.size++
//     }
//     pop(){
//         let current=this.head
//         while(current.next!==this.tail){
//             current=current.next
//         }
//         current.next=null
//         this.tail=current
//         this.size--
//     }
//     shift(){
//         this.head=this.head.next
//         this.size--
//     }
//     pull(val){
//         let current=this.head
//         while(current!==null&&current.next!==null){
//             if(current.next.val===val){
//                 current.next=current.next.next
//                 this.size--
//             }else{
//                 current=current.next
//             }
//         }
//     }
//     getindex(index){
//         let current=this.head
//         let currentindex=0
//         while(current){
//             if(currentindex==index){
//                 return current.val
//             }
//             current=current.next
//             currentindex++
//         }
//     }
//     midval(){
//         let slow=this.head
//         let fast=this.head
//         while(fast!==null&&fast.next!==null){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         console.log(slow.val)
//     }

//     reverse(){
//         let current=this.head
//         let prev=null
//         while(current){
//             let temp=current.next
//             current.next=prev
//             prev=current
//             current=temp
//         }
//         this.head=prev
//     }
// }

// const list=new LinkedList()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.append(60)
// console.log(list.getindex(4))
// list.midval()
// list.reverse()
// console.log(JSON.stringify(list.head))

// function binarysearch(arr,t){
//     arr.sort((a,b)=>a-b)
//     leftindex=0
//     rightindex=arr.length-1
//     while(leftindex<=rightindex){
//         let midval=Math.floor((leftindex+rightindex)/2)
//         if(arr[midval]===t){
//             arr[midval]=40
//             return arr
//         }
//         if(t<arr[midval]){
//             rightindex=midval-1

//         }else{
//             leftindex=midval+1
//         }
//     }
// }

// console.log(binarysearch([92,32,43,56,76],76))


// function recursionbinarysearch(arr,t){
//     return search(arr,t,0,arr.length-1)
// }

// function search(arr,t,leftindex,rightindex){
//     arr.sort((a,b)=>(a-b))
//     if(leftindex>rightindex){
//         return -1
//     }
//     let midval=Math.floor((leftindex+rightindex)/2)
//     if(arr[midval]===t){
//         return midval
//     }
//     if(t<arr[midval]){
//         return search(arr,t,leftindex,rightindex-1)
//     }else{
//         return search(arr,t,leftindex+1,rightindex)
//     }
// }

// console.log(recursionbinarysearch([1,2,43,4,5],5))



// function recursion(n){
//     if(n===0){
//         return 1
//     }

//     return n*recursion(n-1)
// }

// console.log(recursion(5))


// function fibnacci(n){
//     if(n===0){
//         return 0
//     }
//     if(n===1){
//         return 1
//     }

//     return fibnacci(n-1)+fibnacci(n-2)
// }

// console.log(fibnacci(10))

// function sum(n){
//     if(n==0){
//         return 0
//     }
//     return n+sum(n-1)
// }


// console.log(sum(5))
// a=[1,2,3,4,5]
// let sum=0
//   for(i=0;i<a.length;i++){
//     sum=sum+a[i]
//   }
//   console.log(sum)



// class Node{
//     constructor(val){
//         this.prev=null
//         this.val=val
//         this.next=null
//     }
   

// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     prepend(val){
//         let node=new Node(val)
//         if(this.size>0){
//             node.next=this.head
          
//         }else{
//             this.tail=node
//         }
//         this.head=node
//         this.prev=null
//         this.size++
//     }

//     append(val) {
//         let node = new Node(val);
//         if (this.size > 0) {
//             this.tail.next = node;
//             node.prev = this.tail; 
//             this.tail = node;
//         } else {
//             this.head = node;
//             this.tail = node;
//             node.prev = null; 
//         }
//         this.size++
    
//     }
    
// }

// let list=new LinkedList()

// list.append(10)
// list.append(20)
// console.log(JSON.stringify(list))


// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     append(val) {
//         let node = new Node(val);
//         if (this.size > 0) {
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//         } else {
//             this.head = node;
//             this.tail = node;
//         }
//         this.size++;
//     }

   
// }

// // Example usage:
// let list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);

// console.log(list);  


// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(val){
//         let node=new Node(val)
//         if(this.size>0){
//             this.tail.next=node
//             this.tail=node
//         }else{
//             this.head=node
//             this.tail=node
//         }
//         this.size++
//     }
//     mid(){
//         let slow=this.head
//         let fast=this.head
        
//         while(fast!==null&&fast.next!==null){
            
//             slow =slow.next
//             fast=fast.next.next
       
//         }

//         slow.val=slow.next.val
//         slow.next=fast
        
       

        
//     }
//     getindex(val){
//         let current=this.head
//         let currentindex=0
//         while(current){
//             if(currentindex===val){
//                current.val=current.next.val
//                current.next=null
//             }
//             current=current.next
//             currentindex++
//         }
//         this.size--
//     }

//     sort() {
//         let current = this.head;

//         while (current !== null) {
//             let index = current.next;
//             let min = current;

//             while (index !== null) {
//                 if (index.val < min.val) {
//                     min = index;
//                 }
//                 index = index.next;
//             }

//             if (min !== current) {
//                 let temp = current.val;
//                 current.val = min.val;
//                 min.val = temp;
//             }

//             current = current.next;
//         }
//     }
// }

// const list=new LinkedList()

// list.append(50)
// list.append(20)
// list.append(40)
// list.append(30)
// list.append(10)
// list.sort()
// console.log(JSON.stringify(list.head))




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
//         if(this.size>0){
//             node.next=this.head

//         }else{
//             this.tail=node
//         }
//         this.head=node
//         this.size++
//     }
//     append(val){
//         let node=new Node(val)
//         if(this.size>0){
//             this.tail.next=node
//             this.tail=node
//         }else{
//             this.head=node
//             this.tail=node
//         }
//         this.size++
//     }
//     mid(){
//         let slow=this.head
//         let fast=this.head
//         while(fast!==null&&fast.next!==null){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         slow.val=slow.next.val
//         slow.next=fast
//     }
//     getindex(index){
//         let current=this.head
//         let currentindex=0
//         while(current){
//             if(currentindex===index){
//                 current.val=current.next.val
//                 current.next=current.next.next
            
//             }
//             current=current.next
//             currentindex++
//         }
//     }
//     pull(val){
//         let current=this.head
        
//         while(current!==null){
//           if(current.val===val){
//             current.val=current.next.val
//             current.next=current.next.next
//             return current.val
//           }
//           current=current.next
//         }
//     }
// }

// const list=new linkedlist()
// list.prepend(10)
// list.prepend(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.pull(20)
// console.log(JSON.stringify(list.head))


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

//     set(key,value){
//         let index=this.hash(key)
//         if(!this.table[index]){
//           this.table[index]=[[key,value]]
//         }else{
//            const item=this.table[index].find((item)=>item[0]===key) 
//            if(item){
//             item[1]=value
//            }else{
//             this.table[index].push([key,value])
//            }
//         }
//     }
//     get(key){
//         let index=this.hash(key)
       
//             console.log(this.table[index][0][1])
//         }
//     }



// const ht=new HashTable(5)
// ht.set('name','sasi')
// ht.set('age',25)

// ht.get('age')


// class HashTable{
//     constructor(size){
//        this.table=new Array(size)
//        this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//            total+= key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,val){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=[[key,val]]
//         }else{
//             const item=this.table[index].find((item)=>item[0]===key)
//             if(item){
//                 item[1]=val
//             }else{
//                 this.table[index].push([key,val])
//             }
//         }
//     }
//     get(key){
//         let index=this.hash(key)
//         console.log(this.table[index][0][1])
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//             console.log(i,this.table[i])
//         }
//     }
//     }
// }



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
//      set (key ,val){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=[[key,val]]
//         }else{
//             const item=this.table[index].find((item)=>item[0]===key)
//             if(item){
//                 item[1]=val
//             }else{
//                 this.table[index].push([key,val])
//             }
//         }
//      }
//      get(key){
//         let index=this.hash(key)
//         console.log(this.table[index][0][1])
//      }

//      remove(key){
//         let index=this.hash(key)
//         let remove=this.table[index]
//         if(remove){
//          const item=remove.find((item)=>item[0]===key)
//          if(item){
//             remove.splice(remove.indexOf(item),1)
//         }
//         }
      
       
//      }
//      print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//      }
// }

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

//     set(key,val){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=[[key,val]]

//         }else{
//             const item=this.table[index].find((item)=>item[0]===key)
//                 if(item){
//                   item[1]=val
//                 }else{
//                     this.table[index].push([key,val])
//                 }
            
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         console.log(this.table[index][0][1])

//     }

//     remove(key){
//       let index=this.hash(key)
//       let bucket=this.table[index]
//       if(bucket){
//         const item=bucket.find((item)=>item[0]===key)
//         if(item){
//             bucket.splice(bucket.indexOf(item),1)
//         }
//       }
//     }


//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//             console.log(i,this.table[i])
//         }
//     }
//     }
// }

// const ht=new HashTable(5)
// ht.set('name','sasi')
// ht.set('age',25)
// ht.get('name')
// ht.print()


// class que{
//     constructor(){
//         this.item=[]
//     }

//     enque(element){
//         this.item.push(element)

//     }
//     deque(){
//         this.item.shift()
//     }
//     peek(){
//         console.log(this.item[0])
//     }
//     size(){
//         console.log(this.item.length)
//     }
//     isempty(){
//         console.log(this.item.length===0)
//     }

//     print(){
//         for(let i=0;i<this.item.length;i++){
//             console.log(this.item[i])
//         }
//     }
// }

// const q=new que
// q.enque(10)
// q.enque(20)
// q.enque(30)
// q.enque(40)
// q.enque(50)
// q.enque(60)
// q.deque()
// q.peek()
// q.print()


// class que{
//     constructor(){
//         this.item={}
//         this.last=0
//         this.first=0
//     }
    
//     enque(element){
//         this.item[this.last]=element
//         this.last++
//     }
//     deque(){
//         const item=this.item[this.first]
//         delete this.item[this.first]
//         this.first++
//     }

//     peek(){
//         console.log(this.item[this.first])
//     }

//     size(){
//         return this.last-this.first

//     }

//     isempty(){
//         return this.last-this.first===0
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
// q.enque(60)

// q.print()

class Node{
    constructor(val){
        this.val
        this.next
    }
}


class linkedlist{
    constructor(){
        this.head=null
        this.next=null
        this.size=0
    }


    append(val){
        let node=new Node(val)
        if(this.size>0){
            this.tail.next=node

            this.tail=node
        }else{
            this.head=node
            this.tail=node
        }

        this.size++
    }

    deque(){
        this.head=this.head.next
        this.size--
    }

    peek(){
       console.log(this.head.val) 
    }
    print(){
        let current=this.head
        while(current!==null){
            console.log(current.val)

            current=current.next
        }
    }
}

const list=new linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)


function reverseStr(Str){
    let stake=[]
    let STR=''
    for(let i=0;i<Str.length;i++){
        arr.push(Str[i])

    }
    console.log(arr)
  for(i=0;i<Str.length;i++){
    STR+=arr.pop()
  }
   console.log(STR) 
}

reverseStr('sasi')
