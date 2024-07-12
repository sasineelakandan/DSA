class Node{
    constructor(){
        this.childrens={}
        this.isEnd=false
    }
}


class trie1{
    constructor(){
        this.root=new Node()
    }


    insert(word){
      let curr=this.root
      for(let i=0;i<word.length;i++){
        if(!curr.childrens[word[i]]){
            curr.childrens[word[i]]=new Node() 
        }
        curr=curr.childrens[word[i]]
      }
      
      curr.isEnd=true
    }

    prefix(word){
       let curr=this.root
       for(let i=0;i<word.length;i++){
        if(!curr.childrens[word[i]]){
            return false
        }
        curr=curr.childrens[word[i]]
       }
       return true
    }
    autofill(word){
        let curr =this.root
        for(let i=0;i<word.length;i++){
            if(!curr.childrens[word[i]]){
                return -1
            }
            curr=curr.childrens[word[i]]
           }
           return this.print(curr,word,[])

    }

    print(node=this.root,str='',res=[]){
        if(node.isEnd){
            res.push(str)
        }

        for(let key in node.childrens){
            console.log(key)
          this.print(node.childrens[key],str+key,res)  
        }
        return res
    }
}

const trie= new trie1()
trie.insert("pranav")
trie.insert("prathyusha")
trie.insert("preethi")
// console.log(trie.search("pranav"))
console.log(trie.prefix("pra"))
// console.log(JSON.stringify(trie.root))
console.log(trie.print())
console.log(trie.autofill("pr"))