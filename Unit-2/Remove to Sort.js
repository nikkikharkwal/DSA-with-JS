/*
Description

Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.


Input
Input Format

First line Consists of integer n.

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^6


Output
Print the sorted array.


Sample Input 1 

10
1 2 4 3 5 7 8 6 9 10
Sample Output 1

1 2 4 5 7 8 9 10
*/

function removeToSort(arr,n) {
    for(let i = 0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            arr.splice((i+1),1)
            i--;
        }
    }
    console.log(arr.join(" "))
}