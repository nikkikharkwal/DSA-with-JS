/*
Description

The Tribonacci sequence Tn is defined as follows:

T0= 0, T1= 1, T2= 1, and Tn+3= Tn+ Tn+1+ Tn+2 for n >= 0.

Givenn, return the value of Tn


Input
Input Format

The first line contains the number of testcase T

Then T lines follow, each containing an integer N

Constraints

1<=T<=10^5

1<=N<=50


Output
For each test case print the value of Tn in a new line


Sample Input 1 

1
4
Sample Output 1

4
Hint

T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
*/

function tribonacciNumber(n){
    let x = Array(n+1).fill(0);
    
    x[1] = 1;
    
    for(let i = 0;i <= n; i++){
        x[i+1] += x[i];
        x[i+2] += x[i];
        x[i+3] += x[i];
    }
    console.log(x[n]);
}