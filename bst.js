class Node{
    constructor(val){
        this.val=val
        this.right=null
        this.left=null
    }
}


class bts{
    constructor(){
        this.root=null
    }

  insert(val){
    let node=new Node(val)
    if(this.root==null){
        this.root=node
        return this
    }else{
        let current=this.root
        while(true){
            if(val<current.val){
                if(current.left==null){
                    current.left=node
                    return this
                }else{
                    current=current.left
                }
            }else{
                if(current.right==null){
                    current.right=node
                    return this
                }else{
                    current=current.right
                }
            }
        }
    }
  }

  find(val){
    let current=this.root
    let found=false
    while(current&&!found){
        if(val<current.val){
            current=current.left
        }else if(val>current.val){
            current=current.right
        }else{
            found=true
            return  current
        }
    }
    
  }
  contain(val){
    let current=this.root
    let found=false
    while(current&&!found){
        if(val<current.val){
            current=current.left
        }else if(val>current.val){
            current=current.right
        }else{
            found=true
            return  true
        }
    }
    
  }
  bfs(){
    let node=this.root
    let data=[]
    let que=[]
    que.push(node)
    while(que.length){
      node=que.shift()
      data.push(node.val)
      if(node.left){
        que.push(node.left)
      }
      if(node.right){
        que.push(node.right)
      }
    }

    return data
  }
  dfspreOrder(){
    let current=this.root
    let data=[]
    function travel(node){
        
        if(node.left){
            travel(node.left)
        }
        data.push(node.val)
        if(node.right){
            travel(node.right)
        }
        
    }
    travel(current)

    return data
  }
}

let bt=new bts()

bt.insert(40)
bt.insert(30)
bt.insert(20)
bt.insert(50)
bt.insert(60)
console.log(bt.dfspreOrder())

