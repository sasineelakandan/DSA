class que{
    constructor(){
        this.item=[]
    }

    enque(elements){
        this.item.push(elements)
    }
    deque(elements){
        this.item.shift()
    }
    isempty(){
        
     return this.item.length===0
        
    }
    peek(){
        if(!this.isempty()){
            return this.item[0]
        }
        return null
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString())
    }
}

let que2=new que()

que2.enque(10)
que2.enque(20)
que2.enque(30)
que2.enque(40)
que2.enque(50)
que2.print()
console.log(que2.peek())
console.log(que2.size())
console.log(que2.isempty())

