// function mergeSort(arr){
//     if(arr.length===0){
//         return arr
//     }
//     let mid= Math.floor(arr.length/2)
//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))

//     console.log(left)
//     console.log(right)
//     return merge(left,right)
// }


// let arr=[-3,-1,-6,9,5,6,3]

// mergeSort(arr)

// function merge(arr1, arr2) {
//     let result = [], i = 0, j = 0;
  
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         result.push(arr1[i++]);
//       } else {
//         result.push(arr2[j++]);
//       }
//     }
    // console.log(arr1)
    // console.log(arr2)

  //   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
  // }
  
  // function mergeSort(arr) {
  //   if (arr.length <= 1) return arr;
  
  //   const mid = Math.floor(arr.length / 2);
  //   const left = mergeSort(arr.slice(0, mid));
  //   const right = mergeSort(arr.slice(mid));
  
  //   return merge(left, right);
  // }
  
  // console.log(mergeSort([8, 2, 1, 4, 3, 5, 7, 6])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  
  
  // function mergeSort(arr) {
  //   if (arr.length <= 1) return arr;
  //   let mid = Math.floor(arr.length / 2);
  //   let left = mergeSort(arr.slice(0, mid));
  //   let right = mergeSort(arr.slice(mid));
  
  //   return merge(left, right);
  // }
  
 

// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }

//   let mid=Math.floor(arr.length/2)
//   let left=mergeSort(arr.slice(0,mid))
//   let right=mergeSort(arr.slice(mid))
//   return merge(left,right)
// }


// function merge(arr1,arr2){
//   let res=[]
//   while(arr1.length&&arr2.length){
//     if(arr1[0]<arr2[0]){
//       res.push(arr1.shift())

//     }else{
//       res.push(arr2.shift())
//     }
//   }
//   return [...res,...arr1,...arr2]
// }





//  console.log(mergeSort);


//    function quickSort(arr){
//     if(arr.length<=1){
//       return arr
//     }

//     let pointer=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//       if(arr[i]<pointer){
//         left.push(arr[i])
//       }else{
//         right.push(arr[i])
//       }
//     }

//     return [...quickSort(left),pointer,...quickSort(right)]
//    }

// let arr=[8, 2, 1, 4, 3, 5, 7, 6]
//    console.log(quickSort(arr))


class Hashtable{
  constructor(size){
   this.table=new Array(size)
   this.size=size
  }

  hash(key){
    let total=0
    for(let i=0;i<key.length;i++){
      total+=key.charCodeAt(i)
    }
    return total%this.size
  }

  set(key,val){
    let index= this.hash(key)
    if(!this.table[index]){
      this.table[index]=[[key,val]]

    }else{
      
      this.table[index].push([key,val])
      }
    }
  
  get(key){
    let index=this.hash(key)
    console.log( this.table[index][0][1])
  }
 remove(key){
let index=this.hash(key)
let value=this.table[index]
if(value){
  const item=value.find((item)=item[0]===key)
  if(item){
    value.splice(value.indexOf(item,1))
  }
}
 }
  print(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(i,this.table[i])
      }
    }
  }
}


const ht=new Hashtable(5)
ht.set('name','sasi')
ht.set('age','24')

ht.get('name')
ht.print()