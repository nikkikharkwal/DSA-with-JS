/*
Description

Given an array A with N positive integers. Count the number of subarrays that start and end with an even number.


Input
First line: Single integer denoting the value of T - the number of test cases.

For each test case:

First line: Single integer denoting the value of N.

Next line: N single space-separated integers denoting the elements of array A.

Constraints:

1 <= T <= 100
1 <= N<= 100

Any array elements is not greater than 100.


Output
For each test case, print in a new line, a single integer denoting the number of subarrays.


Sample Input 1 

1
5
1 2 3 4 5
Sample Output 1

3
Hint

Given test cases,

Test 1:
N = 5.
A: 1 2 3 4 5.
The following subarrays start and end with even numbers:
1. 2
2. 2 3 4
3. 4


Hence the answer is 3.

*/

function subArrQueII(N, A) {
  //write code here
let count = 0;
  for(let i = 0; i < A.length; i++){
      let sum = [];
      for(let j =i; j < A.length; j++){
          sum.push(A[j]);
      if(sum[0]%2==0 && sum[sum.length-1]%2==0){
          count++;
      }
      }
  }
  console.log(count);
}