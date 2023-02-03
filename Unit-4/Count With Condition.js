/*
Description

Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.


Input
Input Format

First line consists of N and X separated by space.

Second line consists of N integers separated by spaces.

Constraints

1 <= N <= 20

1 <= X <= 100


Output
Print the count in a single line.


Sample Input 1 

4 10
1 2 3 4
Sample Output 1

1
Hint

Sample 1 Explanation

The possible subsets with sum 10 are : [1,2,3,4]
*/

function countWithCondition(n,x,arr){
    let count = 0;
    
    function sum(arr,n,x,pos,z){
    if(z==x){
        count++;
        return;
    }
    if(z>x){
        return;
    }
    else {
        for(let i = pos;i < n;i++){
            z += arr[i];
            sum(arr,n,x,i+1,z);
            z -= arr[i];
        }
        return;
    }
}
    sum(arr,n,x,0,0);
    console.log(count);
}