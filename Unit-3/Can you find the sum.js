/*
Description

Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :

The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1.

Input
Input Format

First line consists of a single integer denoting N.

Second line consists of N space separated integers denoting the array A.

Constraints

1 <= N <= 10^6

1 <= A[i] <= 10^9


Output
Print N space separated integers, denoting x+y for each i


Sample Input 1 

5
5 4 1 3 2
Sample Output 1

-2 0 6 1 3 
Hint

Sample 1 Explanation

Values of x for each i: -1,1,2,2,4

Values of y for each i: -1,-1,4,-1,-1

So, x+y for each i: -2,0,6,1,3
*/

function findSum(n,arr) {
    let stack = [];
    let x = [];
    
    for(let i = 0; i<n; i++){
        while(stack.length !== 0 && arr[stack[stack.length-1]] <= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            x.push(-1);
        }
        else {
            x.push(stack[stack.length-1]+1);
        }
        stack.push(i);
    }
    
    //For Y
    stack = [];
    let y = [];
    
    for(let i = n-1; i>=0; i--){
        while(stack.length !== 0 && arr[stack[stack.length-1]] <= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
        y.push(-1);
        }
        else {
            y.push(stack[stack.length-1]+1);
        }
        stack.push(i);
    }
    
    //X + Y
    
    let sum = ""
    for(let i =0;i<n;i++){
        sum += (x[i]+y[n-i-1]) + " ";
    }
    console.log(sum)
}