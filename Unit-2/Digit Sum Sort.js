/*
Description

Given an array of N space-separated integers you have to sort the array in non-decreasing order of their sum of digits and if two numbers have same sum of digits then the smaller number comes first.


Input
Input Format

First-line contains t - number of test cases.

First-line of each test case contains n - where n is the size of the array

Second-line of each test case contains n space-separated integers.

Constraints

1 <= t <= 10

1 <= n <= 10^4

1 <= a[i] <= 10^6


Output
For each test case print the sorted array in a new line.


Sample Input 1 

2
5
1 2 10 4 11
2
7 24
Sample Output 1

1 10 2 11 4
24 7
Hint

For the first test case,

sum of digits of numbers

1 = 1

2 = 2

10 = 1+0 = 1

4 = 4

11 = 1+1 = 2

sorting numbers we get 1, 1, 2, 2, 4 therefore the required sorted array is 1, 10, 2, 11, 4.

*/
function digitSumSort(arr,n) {
   arr.sort((a,b) => {
       return a-b;
   });
  arr.sort((a,b) => {
      return sum(a) - sum(b)
  })
  console.log(arr.join(" "))
}
function sum(n){
       let sum = 0;
        while(n>0){
            sum += n %10;
           n = Math.floor(n/10)
        }
        return sum;
   }