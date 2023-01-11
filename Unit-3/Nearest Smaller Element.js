/*
Description

You are given an array A of size N. For each element, in the array find the closest element with a smaller value, than the current value. If no such element exists, print -1. If two values are equidistant to the current value, print the one that occurs to the left of it. Refer the sample I/O for better understanding.


Input
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the array.

Next line contains N space separated integers denoting the closest smaller values, or -1, if no such values exist.

Constraints

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i] <= 10^4


Output
For each test case, print N space separated integers, denoting the nearest smaller elements, or -1 if it does not exists, on a new line.


Sample Input 1 

1
8
39 27 11 4 24 32 32 1
Sample Output 1

27 11 4 1 4 24 1 -1 
Hint

In the sample test case, the array has 8 elements. The closest value to the first element 39, which is lesser than it is 27. Similarly, for 27 is 11, for 11 is 4, for 4 is 1, for 24 is 4, for the first instance of 32, the closest value is 24, and for the second instance, the closest value is 1, and for 1, the value is -1, as it has no values lesser than it in the array.
  */

function nearestSmallerElement(n,arr) {
    let stack = [];
    let leftIndex = [];
    
    for(let i =0;i<n;i++){
        while(stack.length !== 0 && arr[stack[stack.length-1]] >= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            leftIndex.push(-1);
        }
        else {
            leftIndex.push(stack[stack.length-1]);
        }
        stack.push(i);
    }
    
    // console.log(leftIndex)
    
    stack = [];
    let rightIndex = [];
    
    for(let i =n-1;i>=0;i--){
        while(stack.length !== 0 && arr[stack[stack.length-1]] >= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            rightIndex.push(-1);
        }
        else {
            rightIndex.push(stack[stack.length-1]);
        }
        stack.push(i);
    }
    
    // console.log(rightIndex)
    let ans = [];
    for(let i = 0;i<n;i++){
        leftIndex[i]
        rightIndex[n-i-1]
        if(arr[leftIndex[i]] == undefined && arr[rightIndex[n-i-1]] == undefined){
            ans.push(-1);
        }
        else if(arr[leftIndex[i]] == undefined){
            ans.push(arr[rightIndex[n-i-1]]);
        }
        else if(arr[rightIndex[n-i-1]] == undefined){
            ans.push(arr[leftIndex[i]]);
        }
        else if(Math.abs(leftIndex[i] - i)  > Math.abs(rightIndex[n-i-1] - i)){
            ans.push(arr[rightIndex[n-i-1]]);
        }
        else if(Math.abs(leftIndex[i] - i)  < Math.abs(rightIndex[n-i-1] - i)){
            ans.push(arr[leftIndex[i]]);
        }
        else{
            ans.push(arr[leftIndex[i]]);
        }
    }
    
    console.log(ans.join(" "))
    
}