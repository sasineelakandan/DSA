// function recursivebinaryserch(arr,t){
//  return serchbinary(arr,t,0,arr.length-1)
// }


// function serchbinary(arr,t,leftindex,rightindex){
//     if(leftindex>rightindex){
//         return -1
//     }
//     arr.sort((a,b)=>a-b)
//     let middlevalue=Math.floor((leftindex+rightindex)/2)
//     console.log(middlevalue)
//     if(t===arr[middlevalue]){
//        return middlevalue
//     }
//     if(t<arr[middlevalue]){
//       return serchbinary(arr,t,leftindex,rightindex-1)
//     }else{
//       return serchbinary(arr,t,leftindex+1,rightindex)
//     }

    

// }

// console.log(recursivebinaryserch([9,2,3,4,5],88))



// function binaryserch(arr,t){
//   arr.sort((a,b)=>a-b)
//   console.log(arr)
//   let leftindex=0
//   let rightindex=arr.length-1
//   while(leftindex<=rightindex){
//    let middlevalue=Math.floor((leftindex+rightindex)/2)
//    if(arr[middlevalue]===t){
//       return middlevalue
//    }
//    if(t<arr[middlevalue]){
//      rightindex= middlevalue-1
//    }else{
//      leftindex= middlevalue+1
//    }
//   }return -1

// }

// console.log(binaryserch([50,80,90,85,45],45))


// function recursionbinartSerch(arr,t){
//    return serchvalue(arr,t,0,arr.length-1)
// }

// function serchvalue(arr,t,leftindex,rightindex){
//    arr.sort((a,b)=>a-b)
   
   
//    if(leftindex>rightindex){
//       return -1
//    }

//    let middlevalue=Math.floor((leftindex+rightindex)/2)
//    if(arr[middlevalue]===t){
//       return middlevalue
//    }
//    if(t<arr[middlevalue]){
//       return serchvalue(arr,t,leftindex,rightindex-1)
//    }else{
//       return serchvalue(arr,t,leftindex+1,rightindex)
//    }

// }

// console.log(recursionbinartSerch([1,65,90,63,72],63))




function recursionbinartSerch(arr,t){
    return serchvalue(arr,t,0,arr.length-1)
}


function serchvalue(arr,t,leftindex,rightindex){
    arr.sort((a,b)=>a-b)
    if(leftindex>rightindex){
        return -1
    }
    let middlevalue=Math.floor((leftindex+rightindex)/2)
    if(t===arr[middlevalue]){
        return middlevalue
    }
    if(t<arr[middlevalue]){
        return serchvalue(arr,t,leftindex,rightindex-1)
    }else{
        return serchvalue(arr,t,leftindex+1,rightindex)
    }

}


console.log(recursionbinartSerch([88,43,24,12,54,90],12))