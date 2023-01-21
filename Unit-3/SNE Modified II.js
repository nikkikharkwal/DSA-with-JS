/*
Description

Andy and Mark are playing a game of arrays.

The game involves finding the smallest neighbor element to the left side for each element in the array

Andy counts the number of elements which do have a smaller neighbor element to the left side. Help Andy find the count


Input
Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000


Output
Print a single integer denoting the number of elements which do have a smaller neighbor element to the left side


Sample Input 1 

8
39 27 11 4 24 32 32 1
Sample Output 1

3
Hint

The element at index4 5 & 6do have a smaller neighbor elements to the left side. Therefore, the answer is 3
*/

function sNEModifiedII(n,arr){
    let stack = [];
    let count = 0;
    
    for(let i = 0;i < n;i++){
        while(stack.length !== 0 && stack[stack.length-1] >= arr[i]){
            stack.pop();
        }
        
        if(stack.length !== 0){
            count++;
        }
        stack.push(arr[i]);
        
    }
    console.log(count)
}