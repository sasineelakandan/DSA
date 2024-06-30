class que{
    constructor(){
        this.item={}
        this.first=0
        this.last=0
    }
    element(element){
        this.item[this.last]=element
        this.last++
    }
    deque(){
        const item=this.item[this.first]
        delete this.item[this.first]
        this.first++
        return item
    }
    peek(){
        return this.item[this.first]
    }
    size(){
        return this.last-this.first
    }
    isempty(){
        return this.last-this.first===0
    }
    print(){
        console.log(this.item)
    }
}

const que2=new que()
que2.element(10)
que2.element(20)
que2.element(30)
que2.element(40)
que2.deque()
console.log(que2.peek())
que2.print()
