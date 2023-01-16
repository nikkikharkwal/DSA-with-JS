/*
Description

A number is given represented in the form of a linked list. Add one to it.


Input
This is a function complete problem. You don't have to take the input just complete the function given.

The sample test case is given only for your understanding.


Output
Return head of linked list which is the new number after incrementing one.


Sample Input 1 

4
2 3 1 3
Sample Output 1

2314
Hint

In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. After adding one the number becomes 2314, as given in the output.
  */


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let node = new LinkedListNode(0);
    node.next = head;
    
    let previous = null;
    let current = node;
    let next = null;
    
    while(current !== null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    node = previous;
    
    let cur = node;
    let carry;
    
    while(cur !== null){
        if(cur.data+1 >9){
            
        carry = 1;
        if(carry === 1){
            cur.data = 0;
            cur = cur.next;
            carry= 0;
        }
      }
      else {
          cur.data = cur.data + 1;
          break;
      }
    }
    
    previous = null;
    current = node;
    next = null;
    
    while(current !== null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    node = previous;
    
    if(node.data === 0) return node.next;
    else return node;
    
};

