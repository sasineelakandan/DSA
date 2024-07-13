class Node{
    constructor(val){
     this.val=val
     this.right=null
     this.left=null
    }
}

class bst{
    constructor(){
        this.root=null
    }


    insert(val){
        let node=new Node(val)
        if(this.root==null){
            this.root=node
            return this
        }else{
            let curr=this.root
            while(true){
                if(val<curr.val){
                    if(curr.left==null){
                        curr.left=node
                        return this
                    }
                    else{
                        curr=curr.left
                    }
                }else{
                    if(curr.right==null){
                        curr.right=node
                        return this
                    }else{
                        curr=curr.right
                    }
                }
            }
        }
    }
    dfs(){
        let node=this.root
        let data=[]
        function tr(node){
            data.push(node.val)
            if(node.left){
                tr(node.left)
            }
            if(node.right){
                tr(node.right)
            }
        }
        tr(node)

        return data

    }
    bfs(){
        let node=this.root
        let data=[]
        let queue=[]
        queue.push(node)
        while(queue.length){
            node=queue.shift()
            data.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }

        return data
    }
    delete(val){
        let curr=this.root
         curr=this.deleteNode(this.root,val)
    }

    deleteNode(node,val){
      let curr=node
      if(val<curr.val){
        curr.left=this.deleteNode(curr.left,val)
      }
      else if(val>curr.val){
        curr.right=this.deleteNode(curr.right,val)
      }else{
          if(!curr.left&&!curr.right){
           return null
          }else if(!curr.left){
            return curr.right
          }else if(!curr.right){
            return curr.left
          }else{
            curr.right=this.min(curr.right)
            curr.val=this.deleteNode(curr.right,curr.val)
          }
          
      } 
      return curr
    }
    min(node){
        let curr=node
        while(curr.left!==null){
            curr=curr.left
        }

        return curr.val
    }
  
}

const bt=new bst()
bt.insert(30)
bt.insert(20)
bt.insert(10)
bt.insert(40)
bt.insert(50)

bt.delete(40)

console.log(JSON.stringify(bt.bfs()))