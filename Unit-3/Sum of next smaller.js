/*
Description

Given an array of integers, find the sum of the nearest smaller values to the right of all the elements, if such values dont exist, consider them zero.


Input
First-line contains T, no of test cases.

First-line of each test case contains n which is the number of elements in the array

Second-lineof each test casecontains n numbers representing elements of the array



Constraints

1 <= T <= 10

1<=N<=100000

1<=Ai<=100


Output
For each test case, output a single integer, the answer to the problem, on new line


Sample Input 1 

2
4
4 3 1 2
4
1 2 3 4
Sample Output 1

4
0
Hint

For 1st test case:-

For 4 first smaller value to the right is  3.

For 3 first smaller value to the right is 1.

For 1 first smaller value to the right is not there.

For 2 first smaller value to the rightis not there.

  */


function sumNextSmaller(n,arr){
    let stack = [];
    let sum = 0;
    
    for(let i = n-1; i>= 0;i--){
        while(stack.length !== 0 && stack[stack.length - 1] >= arr[i]){
            stack.pop();
        }
        
        if(stack.length === 0 ) sum += 0;
        else sum += stack[stack.length - 1];
        
        stack.push(arr[i]);
    }
    
    console.log(sum);
}