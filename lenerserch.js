function lenerserch(arr,t){
  for(i=0;i<arr.length;i++){
    if(arr[i]==t){
      return i
    }
  }return -1
}

console.log(lenerserch([1,2,3,4,5],4))
console.log(lenerserch([10,2,30,40,5],2))
console.log(lenerserch([10,2,30,40,5],7))