/*
Description

You are given an integernum.

You need to printYesif that integer is a palindrome or else printNo.

A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar.


Input
Input Format

First line containsnum, a integer.

Constraints

1 <= num <= 1000000


Output
PrintYesorNodepending upon the integer.


Sample Input 1 

1221
Sample Output 1

Yes
Hint

Sample 1 Explanation

We printYesas1221is a palindrome.
  */

function detectPalindrome(num){
//write code here
num = num.toString();
let count = 0;
for(let i = 0; i < num.length; i++){
    if(num[i]==num[num.length-1-i]){
        count++;
    }
}
if(count===num.length){
    console.log("Yes");
}
else {
    console.log("No");
}
}