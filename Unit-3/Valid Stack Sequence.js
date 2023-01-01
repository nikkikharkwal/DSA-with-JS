/*
Description

Given two integer arrays pushed and popped each with distinct values, print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.


Input
Input Format

The first line contains the number of testcases - t

For each testcase:

The first line contains the number of values - n
The second line contains the pushed array
The third line contains the popped array
Constraints

1<=t<=10

1<=n<=10^5

All elements of pushed and popped are distinct


Output
Print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.


Sample Input 1 

2
5
1 2 3 4 5
4 5 3 2 1
5
1 2 3 4 5
4 3 5 1 2
Sample Output 1

YES
NO
Hint

Explanation 1 : We might do the following sequence:

push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Explanation 2 : 1 cannot be popped before 2.

*/

function validStackSequence(arr1,arr2,n) {
    let stack = [];
    let start = 0;

    for(let i =0;i<n;i++){
        stack.push(arr1[i]);
        while(stack.length !==0 && stack[stack.length-1] == arr2[start]){
            stack.pop();
            start++;
        }
    }
    
    if(stack[stack.length-1] != arr2[start]){
        console.log("NO");
    }
    else {
        console.log("YES");
    }
    

}