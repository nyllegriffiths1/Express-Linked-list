class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getAt(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        for(let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    removeAt(index) {
        if(index < 0 || index >= this.length) return null;
        let removedNode;
        if(index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            const prev = this.getAt(index - 1);
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return removedNode;
    }

    toArray() {
        const array = [];
        let current = this.head;
        while(current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}

module.exports = LinkedList;