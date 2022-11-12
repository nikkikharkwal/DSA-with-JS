/*
Description

Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

If there are two elements present the maximum number of times, print the one which comes first in the array.


Input
Input Format

First line contains N

The second line contains N integers separated by spaces.

Constraints

N < 100

The array contains integers only


Output
Print one integer, the one which is present the maximum number of times.


Sample Input 1 

5
0 2 0 6 9
Sample Output 1

0
Hint

Sample 1 Explanation

Since 0 is present the maximum number of times (2 times) => The answer is 0
*/

function maximumOccuringElement(A,N){
    //write code here
    let noOfTimes = {};
for(let i = 0; i < A.length; i++){
  let key = A[i];
  let count = 0;
  for(let j = 0; j < A.length; j++){
    if(A[i]===A[j] && i > j){
       break; 
    }
    if (A[i] == A[j]) {
      count++;
    }
  }
  if(count > 0 ){
    noOfTimes[key] = count;
  }
}

let max = 0;
let min = 0;
for(let key in noOfTimes){
    if(noOfTimes[key] > max){
        max = noOfTimes[key];
        min = key;
    }
}
console.log(min)
}