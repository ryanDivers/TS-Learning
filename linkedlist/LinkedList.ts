class Nodes<T> {
    data : T;
    next : Nodes<T> | null = null;

    constructor(data : T) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

class LinkedList<T> {
    head : Nodes<T> | null = null;

    public insertNode(data : T) {
        const Node = new Nodes(data);

        if(!this.head) {
            this.head = Node;
        }
        else {
            let LastNode = this.getLast();
            if(LastNode){
                LastNode.next = Node;
            }
            
        }

    }

    private getLast() {
        let currentNode = this.head;

        while (currentNode?.next != null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    public printValues() {
        let currentNode = this.head;
        

        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    public deleteNode(data : T) {
         let currentNode = this.head;

         while ( currentNode?.next?.data != data ) {
             
         } 
    }
}

const List = new LinkedList();
List.insertNode(1);
List.insertNode(3);
List.insertNode(7);
List.insertNode(2);
List.printValues();
