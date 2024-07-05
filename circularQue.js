class CircularQ {
    constructor(size) {
        this.item = new Array(size);
        this.size = size;
        this.first = -1;
        this.last = -1;
        this.count = 0; 
    }

    enque(element) {
      
        this.last = (this.last + 1) % this.size;
        this.item[this.last] = element;
        this.count++;
    }

    deque() {
       
        let remove = this.item[this.first];
        this.item[this.first] = null;
        this.first = (this.first + 1) % this.size;
        this.count--;
        return remove;
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }

    print() {
        console.log(this.item);
    }
}

const cq = new CircularQ(5);

cq.enque(10);
cq.enque(20);
cq.enque(30);
cq.enque(40);
cq.enque(50);
cq.print();

cq.deque();
cq.deque();
cq.print();

// cq.enque(60);
// cq.print();
