/*
Description

Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

Mathematically,

G[i] for an element A[i] is an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Note: Elements for which no smaller element exist, consider next smaller element as -1.


Input
Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000


Output
Print N space separated integers denoting the array G.


Sample Input 1 

8
39 27 11 4 24 32 32 1
Sample Output 1

-1 -1 -1 -1 4 24 24 -1
*/

function smallerNeighbourElement(n,arr) {
    let stack = [];
    let ans = "";
    let start = 0;
    
    while(start<n){
        if(stack.length === 0){
            ans += -1 + " ";
            stack.push(arr[start]);
            start++;
        }
        else{
            if(stack[stack.length-1] < arr[start]){
                ans += stack[stack.length-1] + " ";
                stack.push(arr[start])
                start++;
            }
            else{
                stack.pop();
            }
        }
    }
console.log(ans)
}