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

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// class bst {
//     constructor() {
//         this.root = null;
//     }

//     insert(val) {
//         let node = new Node(val);
//         if (this.root == null) {
//             this.root = node;
//             return this;
//         } else {
//             let current = this.root;
//             while (true) {
//                 if (val < current.val) {
//                     if (current.left == null) {
//                         current.left = node;
//                         return this;
//                     } else {
//                         current = current.left;
//                     }
//                 } else {
//                     if (current.right == null) {
//                         current.right = node;
//                         return this;
//                     } else {
//                         current = current.right;
//                     }
//                 }
//             }
//         }
//     }

//     find(val) {
//         let current = this.root;
//         let found = false;
//         while (current && !found) {
//             if (val < current.val) {
//                 current = current.left;
//             } else if (val > current.val) {
//                 current = current.right;
//             } else {
//                 found = true;
//                 return found;
//             }
//         }
//         if (!found) {
//             return 'no value';
//         }
//     }

//     delete(val) {
//         this.root = this.deletenode(this.root, val);
//     }

//     deletenode(current, val) {
//         if (current === null) {
//             return null;
//         }

//         if (val < current.val) {
//             current.left = this.deletenode(current.left, val);
//         } else if (val > current.val) {
//             current.right = this.deletenode(current.right, val);
//         } else {
//             if (!current.right && !current.left) {
//                 return null;
//             } else if (!current.left) {
//                 return current.right;
//             } else if (!current.right) {
//                 return current.left;
//             } else {
//                 current.val = this.min(current.right);
//                 current.right = this.deletenode(current.right, current.val);
//             }
//         }
//         return current;
//     }

//     min(node) {
//         let current = node;
//         while (current.left !== null) {
//             current = current.left;
//         }
//         return current.val;
//     }

//     bfs() {
//         let node = this.root;
//         let data = [];
//         let que = [];
//         que.push(node);
//         while (que.length) {
//             node = que.shift();
//             data.push(node.val);
//             if (node.left) {
//                 que.push(node.left);
//             }
//             if (node.right) {
//                 que.push(node.right);
//             }
//         }
//         return data;
//     }

//     dfs() {
//         let current = this.root;
//         let data = [];
//         function travel(node) {
//             data.push(node.val);
//             if (node.left) {
//                 travel(node.left);
//             }
//             if (node.right) {
//                 travel(node.right);
//             }
//         }
//         travel(current);
//         return data;
//     }
// }



// const bt=new bst()

// bt.insert(50)

// bt.insert(90)
// bt.insert(70)
// bt.insert(40)
// bt.insert(30)
// bt.delete(50)
// console.log(bt.dfs())
// console.log(JSON.stringify(bt.root))


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
    delete(val){
        this.root=this.deleteNode(this.root,val)
    }
    deleteNode(current,val){
        if(val<current.val){
            current.left=this.deleteNode(current.left,val)
        }
        else if(val>current.val){
            current.right=this.deleteNode(current.right,val)
        }else{
            if(!current.left&&!current.right){
                 return null
            }
            else if(!current.left){
                return current.right
            }
            else if(!current.right){
                return current.left
            }else{
                current.right=this.min(current.right)
                current.val=this.deleteNode(current.right,current.val)
            }
            
        }
        return current
    }
    min(node){
        let current=node
     while(current.left!==null){
           current=current.left
     }
     return current.val
    }
}
const bt=new bst()

bt.insert(50)
bt.insert(90)
bt.insert(70)
bt.insert(40)
bt.insert(30)
bt.insert(20)
bt.insert(60)
bt.delete(40)



console.log(bt.findHight())
console.log(JSON.stringify(bt.root))