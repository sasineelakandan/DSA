// class Node{
//     constructor(val){
//         this.val=val
//         this.right=null
//         this.left=null
//     }
// }


// class bts{
//     constructor(){
//         this.root=null
//     }

//   insert(val){
//     let node=new Node(val)
//     if(this.root==null){
//         this.root=node
//         return this
//     }else{
//         let current=this.root
//         while(true){
//             if(val<current.val){
//                 if(current.left==null){
//                     current.left=node
//                     return this
//                 }else{
//                     current=current.left
//                 }
//             }else{
//                 if(current.right==null){
//                     current.right=node
//                     return this
//                 }else{
//                     current=current.right
//                 }
//             }
//         }
//     }
//   }

//   find(val){
//     let current=this.root
//     let found=false
//     while(current&&!found){
//         if(val<current.val){
//             current=current.left
//         }else if(val>current.val){
//             current=current.right
//         }else{
//             found=true
//             return  current
//         }
//     }
    
//   }
//   contain(val){
//     let current=this.root
//     let found=false
//     while(current&&!found){
//         if(val<current.val){
//             current=current.left
//         }else if(val>current.val){
//             current=current.right
//         }else{
//             found=true
//             return  true
//         }
//     }
    
//   }
//   bfs(){
//     let node=this.root
//     let data=[]
//     let que=[]
//     que.push(node)
//     while(que.length){
//       node=que.shift()
//       data.push(node.val)
//       if(node.left){
//         que.push(node.left)
//       }
//       if(node.right){
//         que.push(node.right)
//       }
//     }

//     return data
//   }
//   dfspreOrder(){
//     let current=this.root
//     let data=[]
//     function travel(node){
        
//         if(node.left){
//             travel(node.left)
//         }
//         data.push(node.val)
//         if(node.right){
//             travel(node.right)
//         }
        
//     }
//     travel(current)

//     return data
//   }
// }

// let bt=new bts()

// bt.insert(50)

// bt.insert(90)
// bt.insert(70)
// bt.insert(40)
// bt.insert(30)
// console.log(JSON.stringify(bt.root))

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
                    found =true
                    return found
                }
            }
            if(!found){
                return 'no value'
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


          dfs(){
            let current=this.root
            let data=[]
            function travel(node){
             data.push(node.val)  
              if(node.left){
                travel(node.left)
              }
              
              if(node.right){
                travel(node.right)
              }
              
            }
            travel(current)
            return data
          }
}

const bt=new bst()
bt.insert(50)

bt.insert(90)
bt.insert(70)
bt.insert(40)
bt.insert(30)
console.log(bt.dfs())
console.log(JSON.stringify(bt.root))


class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null

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
            }
            else if(current.val<val){
                current=current.right
            }else{
                found=true
                return current
            }
        }
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

    dfs(){
       let current=this.root
       let data=[]
       function tr(node){
        
         if(node.left){
            tr(node.left)
         }
       
         if(node.right){
            tr(node.right)
         }
         data.push(node.val)
       }
       tr(current)
       return data
    }

    finddegree(node){
        let degree=0
        
        if(node.left){
            degree+=1
        }
        if(node.right){
            degree+=1
        }

        return degree
    }

    findHight(node=this.root){
        
        if(node==null){
            return 0
        }

        let lefthight=this.findHight(node.left)
        let righthight=this.findHight(node.right)
        return Math.max(lefthight,righthight)+1
    }
}
// const bt=new bst()

// bt.insert(50)
// bt.insert(90)
// bt.insert(70)
// bt.insert(40)
// bt.insert(30)
// bt.insert(20)
// bt.insert(60)




// console.log(bt.findHight())
// console.log(JSON.stringify(bt.root))