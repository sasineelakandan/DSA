// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }


// class linkedlist{
//    constructor(){
//     this.head=null
//     this.tail=null
//     this.size=0
//    }
//    append(val){
//     let node=new Node(val)
//     if(this.size>0){
//         this.tail.next=node
//         this.tail=node
//     }else{
//         this.head=node
//         this.tail=node
//     }
//     this.size++
//    }
//    deque(){
//     this.head=this.head.next
    
//     this.size--
//    }
//    peek(){
//     console.log(this.head.val)
//    }
//    print(){
//     let current=this.head
//     while(current!==null){
//         console.log(current.val)
//         current=current.next
//     }
//    }

// }

// const list=new linkedlist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.deque()
// list.peek()
// list.print()


