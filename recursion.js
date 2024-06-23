// function recursion(n){
//     if(n===0){
//         return 1
//     }
//     return n*recursion(n-1)
// }

// console.log(recursion(5))
// console.log(recursion(7))

// function fibonacci(b) {
//     if (b === 0) {
//         return 0;
//     } else if (b === 1) {
//         return 1;
//     }
//     return fibonacci(b - 1) + fibonacci(b - 2);
// }

// function recursion(arr, result = []) {
//     if (arr.length === 0) {
//         return result;
//     }
    
//     const n = arr.shift(); 
//     result.push(fibonacci(n)); 
//     return recursion(arr, result); 
// }

// console.log(recursion([1, 2, 3, 4, 5])); 


// function reverseString(string,index=string.length-1){
//    if(index<0){
//      return ''
//    }
  
//    return string[index] + reverseString(string,index-1)


// }

// console.log(reverseString('sasi'))


// let a=[1,2,3,4,5]
// let b=a.reduce((acc,cur)=>acc+cur,0)
// console.log(b)

// let a = ['sasi', 'yse', 'riyas', 'jithin'];
// let big = '';
// let sl = '';

// for (let i = 0; i < a.length; i++) {
//     if (a[i].length > big.length) {
//         sl = big;
//         big = a[i];
//     } else if (a[i].length > sl.length && a[i].length !== big.length) {
//         sl = a[i];
//     }
// }

// console.log("Longest:", big);
// console.log("Second Longest:", sl);

// function recursion(arr,start=0,end=arr.length-1){
//     if(start>=end){
//         return arr
//     }
//    [arr[start],arr[end]]=[arr[end],arr[start]]
    
//     return recursion(arr,++start,--end)
// }

// console.log(recursion('sasi'))
// const abc = [
//     {af:[3,4,4]},
//     {adf:[3,4,4]},
//     {afd:[3,4,4]},
//     {daldf:[3,4,4]}
// ]
// let sum=0
// for(i=0;i<abc.length;i++){
//     let obj=abc[i]
//     for(let i in obj){
       
//      obj[i].fill(0)
//      console.log(obj[i])
//     }
    
    
// }console.log(sum)
// let count=0
// b=['a','e','i','o','u']
// function recursion(arr,index=0){
//   if(index==arr.length){
//       return ''
//   }
 
//   if(b.includes(arr[index])){
//     count++
//   }
   
//   return recursion(arr,++index)


// }

// recursion('sasi')
// console.log(count)


const abc = [
    {af:3},
    {adf:3},
    {afd:3},
    {daldf:3}
]
let sum=0
for(i=0;i<abc.length;i++){
let b=abc[i]
 
let a=Object.values(b)

  sum+=a.reduce((acc,cur)=>acc+cur,0)

}
console.log(sum)


// class Node{
//   constructor(val){
//     this.prev=null
//     this.val=val
//     this.next=null
//   }
// }

// class linkedlist{
//   constructor(){
//     this.head=null
//     this.tail=null
//     this.size=0
//   }

//   prepend(val){
//     let node=new Node(val)
//     if(this.size>0){
//       node.next=this.head
//       this.head.prev=node
//       this.head=node
//     }else{
//       this.head=node
//       this.tail=node
      
//     }
//     this.size++
//   }

//   append(val){
//     let node=new Node(val)
//     if(this.size>0){
//       this.tail.next=node
//       node.prev=this.tail
//       this.tail=node
//     }else{
//       this.head=node
//       this.tail=node
//     }
//     this.size++
//   }
//   reverse(){
//     let prev=null
//     let current=this.head
//     while(current!==null){
//       let temp=current.next
//       current.next=prev
     
//       if(prev){
//         prev.prev=current
//       }
    
//       prev=current
//       current=temp
//     }

//     this.head=prev
//     this.head.prev=null
//   }

//   mid(){
//     let slow=this.head
//     let fast=this.head
//     while(fast!==null&&fast.next!==null){
//        slow=slow.next
//        fast=fast.next.next
//     }
//     slow=slow.next
    
//   }
// }
// let list=new linkedlist()
// list.append(10)
// list.append(20)
// list.append(30)

// list.mid()
// console.log(list.head)

if(false) 
  console.log('hai')
console.log('bye')