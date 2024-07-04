class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
         let total=0
         for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
         }
         let index=total%this.size

         return this.quatratic(index)
    }

    quatratic(index){
        let ind=index
        let i=1
        while(index<this.size){
            index=i*i
            if(this.table[index]===undefined){
                return index
            }
            i++
        }
    }

    set(key,val){
       let index=this.hash(key)
       this.table[index]=[key,val]
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
    get(key) {
        let index = this.hash(key);
        if (this.table[index]) {
            return this.table[index][1];
        } else {
            return undefined;
        }
    }


}

const ht=new HashTable(5)

ht.set('name','sasi')
ht.set('age',25)
console.log(ht.get('name'))
ht.print()