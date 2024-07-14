class Node{
    constructor(){
        this.children={}
        this.isEnd=false
    }


}

class trai{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            if(!curr.children[word[i]]){
                curr.children[word[i]]=new Node()
            }
            curr=curr.children[word[i]]
        }

        curr.isEnd=true
    }
    prifix(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            if(!curr.children[word[i]]){
                return false
            }
            curr=curr.children[word[i]]
        }
        return this.print(curr,word,[])

    }
    surifix(word1){
        let curr = this.root;
        let word = word1.split('').reverse().join('');
        
        for(let i = 0; i <=word.length; i++){
            if(!curr.children[word[i]]){
                return false;
            }
            curr = curr.children[word[i]];
        }
        return this.print(curr, word, []);
    }

    largestS(prifix){
        let node=this.prifix(prifix)
        if(!node){
            return ''
        }

        let longestword=this.findLongS(node,prifix)
        return longestword
    }


    findLongS(node,currw){
        let longestS=currw

        for(let i in node.children){
            let child=node.children[i]
            let word=this.findLongS(child,currw+i)

            if(word.length>longestS.length){
                longestS=word
            }
        }

        return longestS
    }

    sugession(word){
        let curr=this.root
      for(let i=0;i<word.length;i++){
        if(!curr.children[word[i]]){
            return false
        }
        curr=curr.children[word[i]]
      }
      return this.print(curr,word,[])
    }


    print(node,str='',res=[]){
      if(node.isEnd){
        res.push(str.split('').reverse().join(''))
      }

      for(let i in node.children){
        this.print(node.children[i],str+i,res)
      }

      return res
    }
}

const tt=new trai()
tt.insert('sasinnnn')
tt.insert('selva')
console.log((tt.surifix('n')))