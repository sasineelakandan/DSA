// class Node {
//     constructor(val) {
//         this.val = val; 
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     prepend(val) {
//         let node = new Node(val);
//         if (this.size > 0) {
//             node.next = this.head;
//         } else {
//             this.tail = node; 
//         }
//         this.head = node; 
//         this.size++;
//     }
// }

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);


// console.log(list);
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     prepend(val) {
//         let node = new Node(val);
//         if (this.size > 0) {
//             node.next = this.head;
//         } else {
//             this.tail = node;
//         }
//         this.head = node;
//         this.size++;
//     }

//     append(val) {
//         let node = new Node(val);
//         if (this.size > 0) {
//             this.tail.next = node;
//             this.tail = node;
//         } else {
//             this.head = node;
//             this.tail = node;
//         }
//         this.size++;
//     }
// }

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.append(30);
// console.log(JSON.stringify(list));

// class Node{
//     constructor(val){
//        this.val=val
//        this.next=null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     prepend(val){
//       let node=new Node(val)
//       if(this.size>0){
//         node.next=this.head

//       }else{
//         this.tail=node
//       }
//       this.head=node
//       this.size++
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
// }

// let list= new LinkedList()
// list.prepend(10)
// list.append(20)
// console.log(JSON.stringify(list))



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
//         let node = new Node(val)
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
// }


// let list =new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.append(40)
// list.pop()
// list.shift()
// console.log(JSON.stringify(list))



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
//    let node= new Node(val)
//    if(this.size>0){
//     node.next=this.head

//    }else{
//     this.tail=node
//    }
//    this.head=node
//    this.size++
//     }

//     append(val){
//         let node=new Node(val)
//     if(this.size>0){
//         this.tail.next=node
//         this.tail=node
//     }else{
//         this.head=node
//         this.tail=node
//     }
//     this.size++

//     }
//     pop(val){
//      let current=this.head
//      while(current.next!==this.tail){
//         current=current.next
//      }
//      current.next=null
//      this.tail=current
//      this.size--

//     }
//     shift(){
//         this.head=this.head.next
//         this.size--
//     }
//     pull(val) {
//         let current = this.head;
//         while (current !== null && current.next !== null) {
//             if (current.next.val === val) {
//                 console.log(current.next)
//                 console.log( current.next.next)
//                 current.next = current.next.next;
//                 this.size--;
//             } else {
//                 current = current.next;
//             }
//         }
//         if (this.tail !== null && this.tail.val === val) {
            
//             this.tail = current;
//         }
     
//     }
  
// }



// const list=new LinkedList()
// list.prepend(10)
// list.append(20)
// list.append(10)
// list.append(22)
// list.append(20)
// list.append(10)
// list.pop()
// list.pull(20)
// console.log(JSON.stringify(list))


// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
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
//             this.tail = node;
//         } else {
//             this.head = node;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     pull(val) {
     
//         let current = this.head;
//         while (current !== null && current.next !== null) {
//             if (current.next.val === val) {
//                 current.next = current.next.next;
//                 this.size--;
//             } else {
//                 current = current.next;
//             }
//         }
//         if(this.tail!==null&&this.tail.next!==null){
//             this.tail=current
//         }

       
//     }
//     reverse(){
//         let prev=null
//         let current=this.head
//         while(current){
//             let temp=current.next
//             current.next=prev
//             prev=current
//             current=temp
//         }
//         this.head=prev
        
        
    
//     }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.reverse();

// console.log(JSON.stringify(list))


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
//         let node=new Node(val)
//         if(this.size>0){
//             node.next=this.head
//         }else{
//             this.tail=node
//         }
//         this.head=node
//         this.size++
//     }
//     reverse(){
//         let prev=null
//         let current=this.head
//         while(current){
//             let temp=current.next
//             current.next=prev
//             prev=current
//             current=temp
//         }
//         this.head=prev

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
//     pull(val){
//         let current=this.head
//         while(current!==null&&current.next!==null){
//             if(current.next.val===val){
//                 current.next=current.next.next
//                 this.size--
//             }else{
//                 current=current.next
//             }
//         }if(this.tail.next!==null&&this.tail!==null){
//             this.tail=current
//         }
//     }
//     midValue() {
//         if (this.head === null) {
//             console.log("The list is empty.");
//             return null;
//         }
    
//         let slow = this.head;
//         let fast = this.head;
        
//         while (fast !== null && fast.next !== null) {
            
//             slow = slow.next;
//             fast = fast.next.next;
            
//         }
        
//         console.log(`Middle value: ${slow.value}`);
//     }
    

// }


// const list=new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)
// list .midValue()

// console.log((list.head))


// class Node {
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
//         const newNode = new Node(value);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     midValue() {
//         if (this.head === null) {
//             console.log("The list is empty.");
//             return null;
//         }

//         let slow = this.head;
//         let fast = this.head;

//         while (fast !== null && fast.next !== null) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         console.log(`Middle value: ${slow.value}`);
//         return slow.value;
//     }
// }

// // Example usage:
// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

// list.midValue();  

// console.log(JSON.stringify(list))



// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

    
//         append(value) {
//             const newNode = new Node(value);
//                     if (this.head === null) {
//                         this.head = newNode;
//                     } else {
//                         let current = this.head;
//                         while (current.next !== null) {
//                             current = current.next;
//                         }
//                         current.next = newNode;
//                     }
//                 }

//     // middleValue() {
//     //     if (this.head === null) {
//     //         console.log("The list is empty.");
//     //         return null;
//     //     }

//     //     let slow = this.head;
//     //     let fast = this.head;
//     //     while (fast !== null && fast.next !== null) {
//     //         slow = slow.next;
//     //         fast = fast.next.next;
//     //     }
//     //     console.log(`Middle value: ${slow.value}`);
//     //     return slow.value;
//     // }
// }


// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);


    

// console.log(JSON.stringify(list))

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
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
//             this.tail = node;
//         } else {
//             this.head = node;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     pull(val) {
//         let current = this.head;
//         while (current !== null && current.next !== null) {
//             if (current.next.val === val) {
//                 current.next = current.next.next;
//                 this.size--;
//             } else {
//                 current = current.next;
//             }
//         }
//         if (this.tail !== null && this.tail.next !== null) {
//             this.tail = current;
//         }
//     }

//     reverse() {
//         let prev = null;
//         let current = this.head;
//         while (current) {
//             let temp = current.next;
//             current.next = prev;
//             prev = current;
//             current = temp;
//         }
//         this.head = prev;
//     }

//     findMiddle() {
//         let slow = this.head;
//         let fast = this.head;
//         while (fast !== null && fast.next !== null) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow ? slow.val : null;
//     }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.reverse()
// console.log(list.tail); 
// console.log(list.findMiddle()); 
class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LinkedList{
    constructor(){
      this.head =null
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
        let node = new Node(val)
        if(this.size>0){
            this.tail.next=node
            this.tail=node
           
        }else{
            this.head=node
            this.tail=node
        }
        this.size++
    }
    pop(){
        let current=this.head
        while(current.next!==this.tail){
            current=current.next
        }
        current.next=null
        this.tail=current
    }
    shift(){
        this.head=this.head.next
        this.size--
    }
    pull(val) {
        let current = this.head;
        while (current!==null&&current.next!==null) {
            if (current.next.val === val) {
                current.next = current.next.next;
                this.size--;
            } else {
                current = current.next;
            }
        }
        
        if (this.tail !== null && this.tail.next === null) {
            this.tail = current;
        }
    }
    middleval(){
        let slow=this.head
        let fast=this.head
        while(fast!==null&&fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        console.log(slow.val)
    }
    reverse(){
        let prev=null
        let current=this.head
        while(current){
            let temp=current.next
            current.next=prev
            prev=current
            current=temp
        }
        this.head=prev
    }
    getindex(index){
        let current=this.head
        let currentindex=0
        while(current){
            if(currentindex===index){
                 current.val=current.next.val
                 this.size--
            }
            current=current.next
            currentindex++
        }
    }
}

let list =new LinkedList()
list.prepend(40)
list.prepend(60)
list.prepend(20)
list.append(10)
list.append(80)
list.append(90)
list.middleval()

list.pull(80)
console.log(JSON.stringify(list.head))
