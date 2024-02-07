class Node {
    constructor(key = 0, value, nextNode = null) {
        this.key = key;
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

        if (!this.head) {
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
        return this.size;
    }

    // Get the first node in the list 
    getFirst() {
        return this.head;
    }

    // Get the Tail
    getTail() {
        let actual = this.head;

        while (actual.nextNode !== null) {
            actual = actual.nextNode;
        }

        if (actual.nextNode === null) {
            console.log(actual);
        }
    }

    // Get Node at index
    getAt(index) {
        let actual = this.head;
        let counter = 0;

        while (actual) {
            if (counter === index) {
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

        while (actual.nextNode.nextNode !== null) {
            actual = actual.nextNode;
        }

        if (actual.nextNode.nextNode === null) {
            actual.nextNode = null
        }

        this.size--
    }

    // Contains Value
    contains(value) {
        let actual = this.head

        while (actual) {
            if (actual.value === value) {
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

        while (actual) {
            if (actual.value === value) {
                return counter;
            }
            counter++
            actual = actual.nextNode;
        }

        return null;
    }

    // Insert At
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(value, this.head);
            this.size++
        }

        if (index > 0) {
            let actual = this.head;
            let counter = 0;

            while (actual) {
                if (index - 1 === counter) {
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
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head.nextNode;
            this.size--
        }

        if (index > 0) {
            let actual = this.head;
            let counter = 0;

            while (actual) {
                if (index - 1 === counter) {
                    actual.nextNode = actual.nextNode.nextNode;
                }

                counter++
                actual = actual.nextNode;
            }

            this.size--
        }
    }

    // print list 
    printList() {
        let actual = this.head;
        let finalString = '';

        while (actual) {
            finalString += `( ${actual.value} ) -> `
            if (actual.nextNode === null) {
                finalString += 'null'
            }
            actual = actual.nextNode;
        }

        console.log(finalString)
    }
}

class HashMap {

    constructor() {
        this.map = [];
        this.LoadFactor = 0.75;
        this.size = 16;
        this.currentSize = 1;
    }

    getMap(){
        return this.map
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % 16;
    }

    set(key, value){
        this.map[this.hash(key)] = new Node(this.hash(key), value)
        this.currentSize++
    }

    get(key) {
        while(this.map[this.hash(key)] === undefined){
            if(this.map[this.hash(key)] === undefined){
                return null
            }

            return this.map[this.hash(key)].value
        }
    }

    has(key) {
        let counter = 2;
        const hashKey = this.hash(key);

        this.map.forEach(node => {
            if(node.key === hashKey){
                return true
            }
            counter = counter + 1
        })

        if(counter === this.currentSize){
            return false
        }
    }

    remove(key) {
        const hashKey = this.hash(key);

        if(this.map[hashKey] === undefined){
            return console.log("false")
        } else {
            this.map.splice(hashKey, 1)
            return console.log("true")
        }

    }

    filter() {
        this.map.forEach(node => {
            console.log(node.key)
        })
    }
}

const test = new HashMap()

test.set("patrick", "start1")
test.set("spoge", "bob2")
test.set("squirtel", "number3")
test.set("myself", "test4")
test.set("carlos", "carlos1")
test.set("carlos", "carlos2")
test.set("carla", "carla1")
test.remove("3")
test.filter()
console.log(test.getMap())