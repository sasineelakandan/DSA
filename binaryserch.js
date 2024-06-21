// function binarySearch(arr, t) {
//     arr.sort((a, b) => a - b);
//     let leftindex = 0;
//     let rightindex = arr.length - 1;
  
//     while (leftindex <= rightindex) {
//       let middlevalue = Math.floor((leftindex + rightindex) / 2);
  
//       if (arr[middlevalue] === t) {
//         return middlevalue;
//       }
//       if (t < arr[middlevalue]) {
//         rightindex = middlevalue - 1;
//       } else {
//         leftindex = middlevalue + 1;
//       }
//     }
  
//     return -1; 
//   }
  
//   console.log(binarySearch([1, 6, 3, 4, 5], 3));
// function binarySearch(arr,t){
//     arr.sort((a,b)=>a-b)
//     let leftindex=arr[0]
//   let rightindex=arr.length-1
//   while(leftindex<=rightindex){
//     let medilevalue=Math.floor((rightindex+leftindex)/2)
//     if(arr[medilevalue]===t){
//         return medilevalue
//     }
//     if(t<arr[medilevalue]){
//         medilevalue=rightindex-1
//     }else{
//         medilevalue=leftindex+1
//     }
//   }
//   return -1
// }

// console.log(binarySearch([1,4,6,5,9],5))


function binarySearch(arr,t){
    arr.sort((a,b)=>a-b)
    leftindex=0
    rightindex=arr.length-1
    while(leftindex<=rightindex){
        let middlevalue=Math.floor((leftindex+rightindex)/2)
        if(t===arr[middlevalue]){
            return middlevalue
        }
        if(t<arr[middlevalue]){
            rightindex=middlevalue-1
        }else{
            leftindex=middlevalue+1
        }
    }return -1
}


console.log(binarySearch([1,8,9,4,5,6],9))