// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//          let total=0
//          for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//          }
//          let index=total%this.size

//          return this.quatratic(index)
//     }

//     quatratic(index){
//         let ind=index
//         let i=1
//         while(index<this.size){
//             index=ind+(i*i)
//             if(this.table[index]===undefined){
//                 return index
//             }
//             i++
//         }
//     }

//     set(key,val){
//        let index=this.hash(key)
//        this.table[index]=[key,val]
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
   
//     get(key) {
//         let index = 0;
//         for (let i = 0; i < key.length; i++) {
//           index += key.charCodeAt(i);
//         }
//         index %= this.capacity;
//         //get method for quadratic probing:
//         let start = index,
//           i = 0;
//         while (start < this.capacity) {
//           index += i * i;
//           if (this.array[index][0] === key) break;
//           start++;
//           i++;
//         }
//         return console.log(this.array[index][1]);
//       }
//     }
    




// const ht=new HashTable(5)

// ht.set('name','sasi')
// ht.set('age',25)

// ht.print()

class HashTable {
    constructor(capacity) {
      this.array = new Array(capacity);
      this.capacity = capacity;
    }
  
    hash(key) {
      let index = 0;
      for (let i = 0; i < key.length; i++) {
        index += key.charCodeAt(i);
      }
      index %= this.capacity;
      return this.quadraticProbing(index); 
    }
  
    linearProbing(index) {
      const ind = index;
      let i = 1;
      while (index < this.capacity) {
        index = ind + i;
        if (this.array[index] === undefined) return index;
        i++;
      }
      return -1;
    }
  
    quadraticProbing(index) {
      const ind = index;
      let i = 1;
      while (index < this.capacity) {
        index = ind + (i*i);
        if (this.array[index] === undefined) return index;
        i++;
      }
      return -1;
    }
  
    set(key, value) {
      const index = this.hash(key);
  
      if (index === -1) return console.log("failed to hash");
      this.array[index] = [key, value];
    }
  
  }
  
  const table = new HashTable(5);
  table.set("TN", "Tamil Nadu");
  table.set("NT", "Delhi NCT");
  
  console.log(table.array);