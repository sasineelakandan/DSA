function Quicksort(arr){
    if(arr.length==0){
        return arr
    }
    let pointer=arr[arr.length-1]
    let left=[]
    let right=[]
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pointer){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }

  }
  return [...Quicksort(left),pointer,...Quicksort(right)]
    
}

let arr=[-1,-3,-2,-7,9,5,7]

console.log(Quicksort(arr))