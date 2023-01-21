/*
Description

Sort the linked list containing 0's and 1's only and return a reference to the head node. The head is at position 0.

Complete the sortBinaryList in the editor below.

sortBinaryList the following parameters:

-LinkedListNode pointer list:a reference to the head node in the list


Input
Input Format
The first line of input contains an integer n, the number of elements in the linked list.

The next line contains n integers, the node data values in order.

Constraints
1 <= n <= 10^4

0 <= node values <= 1


Output
Output Format
Output the n node values in sorted order.


Sample Input 1 

5
1 0 1 1 0
Sample Output 1

0 0 1 1 1
Sample Input 2 

4
1 1 1 0
Sample Output 2

0 1 1 1 
Hint

The output is just the sorted linked list.
  */
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var sortBinaryList = function (head) {
    let first = new LinkedListNode(1);
    let zero = new LinkedListNode(0);
    
    let x = first;
    let y = zero;
    
    let temp = head;
    
    while(temp !== null){
        if(temp.data === 0){
            y.next = temp;
            y = y.next;
            temp = temp.next;
            y.next = null;
        }
        else {
            x.next = temp;
            x = x.next;
            temp = temp.next;
            x.next = null;
        }
    }
    
    y.next = first.next;
    return zero.next;
};


