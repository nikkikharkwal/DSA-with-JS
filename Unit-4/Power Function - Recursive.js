/*
Description

Given two integers a and b, we need to find the value of a^b recursively.

Expected Time Complexity - O(logb).


Input
The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).


Output
For each test case, print the answer: The value of a^b.


Sample Input 1 

2 4
Sample Output 1

16
*/

function powerFunction(a,b){
    function recursive(a,b,n){
        if(b == 0){
            return 1;
        }
        else if(b == 1){
            return n;
        }
        else {
            return recursive(a,b-1,a*n);
        }
    }
    console.log((recursive(a,b,a)));
}