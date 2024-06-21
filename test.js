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




class Node{
    constructor(val){
        this.val=val
        this.next=null
        
    }
}


class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    prepend(val){
        let node=new Node(val)
        if(this.size>0){
            node.next=this.head

        }else{
            this.tail=node
        }
        this.head=node
        this.size++
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
    mid(){
        let slow=this.head
        let fast=this.head
        while(fast!==null&&fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        slow.val=slow.next.val
        slow.next=fast
    }
    getindex(index){
        let current=this.head
        let currentindex=0
        while(current){
            if(currentindex===index){
                current.val=current.next.val
                current.next=current.next.next
            
            }
            current=current.next
            currentindex++
        }
    }
    pull(val){
        let current=this.head
        
        while(current!==null){
          if(current.val===val){
            current.val=current.next.val
            current.next=current.next.next
            return current.val
          }
          current=current.next
        }
    }
}

const list=new linkedlist()
list.prepend(10)
list.prepend(20)
list.append(30)
list.append(40)
list.append(50)
list.pull(20)
console.log(JSON.stringify(list.head))