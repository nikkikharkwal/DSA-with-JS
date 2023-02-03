/*
Description

Given an integer n, you need to find out its binary representation using recursion.

Here multiple test cases exist and the expected time complexity is - O(t*logn) where is t is the number of test cases.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the number.


Output
For each test case, print the answer: The binary representation of the integer.


Sample Input 1 

2
15
128
Sample Output 1

1111
10000000
*/

function binary(n,res=""){
      if(n==0){
          return res;
      }
      if(n%2==0){
          res ="0"+res;
      }
      if(n%2==1){
          res ="1"+res;
      }
      return binary(Math.floor(n/2),res);
  }