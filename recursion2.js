// const a=[5,6,7,8]

// function arraySum(arr, sum=0 ){
//     if(arr.length==0){
//          return sum
//     }
//     sum+= arr.pop()
//     return arraySum(arr,sum)
// }

//    console.log(arraySum(a)); 
// [...7]   s 8     
//[5,6] s 15
//[5]     s 21
//[] s 26



// function sum(n){
//   if(n===0){
//     return 0
//   }

//     return n+sum(n-1)

// }

// console.log(sum(5))


// function recursion(arr,sum=0,i=0){
//   if(i>=arr.length){
//      return sum
//   }
  
//   sum+=arr[i]
  
//   return recursion(arr,sum,++i)

// }

// console.log(recursion([1,2,3,4,5]))


// function reverserecursion(arr,start=0,end=arr.length-1){
//   if(start>=end){
//     return arr
//   }
//   [arr[start],arr[end]]=[arr[end],arr[start]]
//    return reverserecursion(arr,start+1,end-1)
// }
// console.log(reverserecursion([1,2,3,4,5]))

// let a=[1,5,3,4,2]

// for(i=0;i<a.length;i++){
//   for(j=i+1;j<a.length;j++){
//     if(a[i]>a[j]){
//    let temp=a[i]
//    a[i]=a[j]

//    a[j]=temp
//     }
//   }
// }
// console.log(a)


