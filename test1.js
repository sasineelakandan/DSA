//  let a='sasi' 
//  let b=a.split('')
//  console.log(b)
// for(i=0,j=b.length-1;i<b.length/2;i++,j--){
//     let temp=b[i]
//     b[i]=b[j]
//     b[j]=temp
// }

// console.log(b.join(''))


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

    append(val){
       let node= new Node(val)
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
        let node= new Node(val)
        if(this.size>0){
            node.next=this.head

        }else{
            this.head=node
            this.tail=null
        }
        this.size++

    }


}


const list= new linkedlist()

list.append(10)
list.append(20)

console.log(JSON.stringify(list.head))



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

