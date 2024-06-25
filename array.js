class Node{
    constructor(val){
        this.val=val
        this.next=null
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
    prepend(val){
        let node=new Node(val)
        if(this.size>0){
            node.next=this.head
            this.head=node
        }else{
            this.head=node
            this.tail=node
        }
        this.size++
    }
    getindex(index){
        let current=this.head
        let currentindex=0
        while(current.next && current.next.val!==index){
        //     if(currentindex===index){
        //        let node=current
        //        node.next=current.next.next
            
        //     }
            current=current.next
            // currentindex++

        }
        
        current.next=current.next.next
        this.size--

    }
    pop(){
        let current=this.head
        while(current.next!==this.tail){
            current=current.next

        }
        
        current.next=null
        this.tail=current
        this.size--
    }
    shift(){
        this.head=this.head.next
        this.size--
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
}

const list=new linkedlist()

list.append(10)
list.prepend(20)
list.append(20)
list.append(40)
list.append(30)
list.append(50)
list.getindex(40)
list.reverse()

console.log(JSON.stringify(list.head))


let k=[1,2,3,5,6,3,2,3,4,5,6,9,10,4,1]


for (let i = 0; i < k.length; i++) {
   for (let j = 0; j < k.length; j++) {
    if(k[i]!==k[j]){
        console.log(`from if ${i} `);
    }else{
        console.log("From ELSE :",i);
    }
   }
}
// // console.log(a.length);
// function findUniqRecurse(arr){
//     if(arr.length===0){
//         return 0
//     }
//     if(!arr.includes(arr[0])){
//         console.log(arr[0]);
//         return arr[0]
//     }else{
//         console.log(arr[0]);
//     }
//     return findUniqRecurse(arr.slice(1))
// }

// let a = [1, 2, 3, 5, 6, 3, 2, 3, 4, 5, 6, 9, 10, 4, 1];

// // Step 1: Find unique elements
// let uniqueElements = a.filter((item, index) => a.indexOf(item) === a.lastIndexOf(item));

// console.log("Unique elements:", uniqueElements[0]);
