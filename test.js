// let a=[8,9,3,3,7,5,8]


// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,val){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=a
//         }else{
//             this.table[index].push([key,val])
//         }
//     }

//     print(){
//         let arr=[]
//         for(let i=0;i<this.table.length;i++){
             
//              arr=this.table[i]
//             }

//             let b=[...new Set(arr)]
//             console.log(b)
//         }
      
//     }


// let ht=new hashtable(1)

// ht.set('arr',a)

// ht.print()

// let a=[
//     {
//         "id": 1,
//         "name": "John Doe",
//         "age": 20,
//         "major": "Computer Science",
//         "gpa": 3.5
//     },
//     {
//         "id": 2,
//         "name": "Jane Smith",
//         "age": 22,
//         "major": "Mechanical Engineering",
//         "gpa": 3.8
//     },
//     {
//         "id": 3,
//         "name": "Michael Johnson",
//         "age": 21,
//         "major": "Electrical Engineering",
//         "gpa": 3.6
//     },
//     {
//         "id": 4,
//         "name": "Emily Davis",
//         "age": 23,
//         "major": "Civil Engineering",
//         "gpa": 3.7
//     },
//     {
//         "id": 5,
//         "name": "David Brown",
//         "age": 24,
//         "major": "Mathematics",
//         "gpa": 3.9
//     }
// ]
  
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i].age>a[j].age){
//             let temp=a[i].age
//             a[i].age=a[j].age
//             a[j].age=temp
//         }
//     }
     
    
    
    
// }
// console.log(a)


// function stake(str){
//  let stake=[]
//  for(let i=0;i<str.length;i++){
//     stake.push(str[i])
//  }
//  let revstr=''
//  for(let i=0;i<str.length;i++){
//     revstr+=stake.pop()
//  }
//  console.log(revstr)
// }

// stake('sasi')

// let str='gtrrtyyyee'

// let  frequency={}
// for(let i=0;i<str.length;i++){
//     let count=1
//    for(let j=i+1;j<str.length;j++){
//     if(str[i]===str[j]){
//         count++
//     }
//     frequency[str[i]]=count
//    }
// }

// console.log(frequency)








let str='gtrrtyyyee'

let  frequency={}
for(let i=0;i<str.length;i++){
    if(frequency[str[i]]) frequency[str[i]]++
    else frequency[str[i]]=1
}
console.log(frequency)