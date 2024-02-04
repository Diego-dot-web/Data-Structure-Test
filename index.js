class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add at the end 
    append(value) {
        let node = new Node(value);
        let actual;

        if(!this.head){
            this.head = node;
        } else {
            actual = this.head;

            while (actual.nextNode) {
                actual = actual.nextNode;
            }

            actual.nextNode = node;
        }

        this.size++;
    }

    // Add at the start 
    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    // get Size
    getSize() {
        return this.size ;
    }

    // Get the first node in the list 
    getFirst() {
        return this.head;
    }

    // Get the Tail
    getTail() {
        let actual = this.head;

        while(actual.nextNode !== null){
            actual = actual.nextNode;
        }

        if (actual.nextNode === null){
            console.log(actual); 
        }
    }

    // Get Node at index
    getAt(index) {
        let actual = this.head;
        let counter = 0;

        while (actual){
            if (counter === index){
                console.log(actual);
            }

            counter++;
            actual = actual.nextNode;
        }

        return null
    }

    // Pop from the end
    removeEnd() {
        let actual = this.head;

        while(actual.nextNode.nextNode !== null){
            actual = actual.nextNode;
        }

        if (actual.nextNode.nextNode === null){
            actual.nextNode = null
        }

        this.size--
    }

    // Contains Value
    contains(value) {
        let actual = this.head

        while(actual) {
            if (actual.value === value){
                return true;
            } 
            
            actual = actual.nextNode;
        }
        
        return false;
    }

    // Find Value
    find(value) {
        let actual = this.head
        let counter = 0;

        while(actual) {
            if (actual.value === value){
                return counter;
            } 
            counter++
            actual = actual.nextNode;
        }
        
        return null;
    }

    // Insert At
    insertAt(value, index){
        if(index < 0 || index > this.size){
            return;
        }

        if(index === 0){
            this.head = new Node(value , this.head);
            this.size++
        }

        if(index > 0){
            let actual = this.head;
            let counter = 0;

            while(actual){
               if(index - 1 === counter){
                actual.nextNode = new Node(value, actual.nextNode)
               } 
               counter++
               actual = actual.nextNode;
            }

            this.size++
        }

        
    }

    // Remove at Index
    removeAt(index) {
        if(index < 0 || index > this.size){
            return;
        }

        if(index === 0){
            this.head = this.head.nextNode;
            this.size--
        }

        if(index > 0) {
            let actual = this.head;
            let counter = 0;

            while(actual) {
                if (index - 1 === counter){
                    actual.nextNode = actual.nextNode.nextNode;
                }

                counter++
                actual = actual.nextNode;
            }

            this.size--
        }
    }

    // print list 
    printList(){
        let actual = this.head;
        let finalString = '';

        while(actual){
            finalString += `( ${actual.value} ) -> `
            if(actual.nextNode === null){
                finalString += 'null'
            }
            actual = actual.nextNode;
        }

        console.log(finalString)
    }
}


const linkedListTest = new LinkedList();

linkedListTest.prepend(50);
linkedListTest.append(100);
linkedListTest.append(200);
linkedListTest.append(300);

linkedListTest.printList();