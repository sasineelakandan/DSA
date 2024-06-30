// function bSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//         let temp=arr[i]
//          arr[i]=arr[i+1]
//          arr[i+1]=temp
//          swapped=true
//         }
//     }
//     }while(swapped){
//         return (arr)
//     }
// }
// let arr=[-33,-99,-43,98,80]

// console.log(bSort(arr))

// function insertSort(arr){
//     for(i=1;i<arr.length;i++){
//        let insertSort=arr[i]
//        let j=i-1
//        while(j>=0&&arr[j]>insertSort){
//         arr[j+1]=arr[j]
//         j=j-1
//        }
//        arr[j+1]=insertSort
//     }

// }
// let arr=[-9,-99,-3,-10,10,4,6]
//  insertSort(arr)

//  console.log(arr)

// function Quicksort(arr){
//     if(arr.length==0){
        
//         return arr
//     }

//     let pointer=arr[arr.length-1]
//     let right=[]
//     let left=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pointer){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }


//     }
//     return [...Quicksort(left),pointer,...Quicksort(right)]
// }

// console.log(Quicksort([1,2,-4,59,6,4]))


// function mergeSort(arr){
//     if(arr.length==0){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(leftarr,rightarr){

// }

// function bsort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
//     }while(swapped){
//         return arr
//     }
// }

// let arr=[1,9,33,17,-2,8]

// bsort(arr)

// console.log(arr)