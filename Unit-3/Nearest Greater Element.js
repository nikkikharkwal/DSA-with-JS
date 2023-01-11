/*
Description

You are given an array A of size N. For each element, print the closest greater element, to that particular element. If there is no greater element for a particular element, print -1.

If the two values, are equidistant from a particular value, print the value that occurs to the left of it.

Refer the sample I/O for better understanding


Input
The first line of the input contains T, the number of test cases. The first line of each test case contains N, the size of the array.

The next line contains N space separated integers, denoting the array elements.

Constraints

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i] <= 10^4


Output
For each test case, print N space separated integers, denoting the nearest greater element in the array, and -1, if no such element exists, on a new line.


Sample Input 1 

1
5
5 4 1 3 2
Sample Output 1

-1 5 4 4 3
Hint

In the sample test case, the first element 5 has no element greater than it, either to the left of it, or to the right of it, therefore, the output is -1.

The second element 4 has only one element greater than it, which is 5, which occurs to the left of it, therefore, the output for 4 is 5.

The third element is 1, which has four elements greater than it in the array, which are {5,4,3,2}. The closest to 1 are {4,3}, but 4 occurs to the left side. therefore, the output is 4.

The fourth element is 3, the elements greater than 3 in the array are {4,5} which both occur to the left of it. But the closer one is 4, therefore, the output is 4.

The fifth element 2 has three elements greater than it, {5,4,3}. The value closest to the element 2 is 3, therefore, the output is 3.
*/

function nearestGreaterElement(n,arr) {
    let stack = [];
    let leftIndex = [];
    
    for(let i =0;i<n;i++){
        while(stack.length !== 0 && arr[stack[stack.length-1]] <= arr[i]){
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
        while(stack.length !== 0 && arr[stack[stack.length-1]] <= arr[i]){
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