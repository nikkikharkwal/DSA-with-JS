/*
Description

You are given a string, whose size is stored in a variable with the nameN

The string is stored in a variable with the namestr

PrintYes, if the string is a palindrome, else printNo

For example, consider the value stored instr = "naman", if we reverse the string, the reversed string will be the same as the original string, hence the string is considered as palindrome, therefore, the output isYes

Note : A palindrome is a string which is the same read forwards or backwards


Input
The first line of the input contains the value stored inN

The next line of the input contains the value stored instr


Output
PrintYes, if the string stored instris a palindrome, else printNo

Sample Input 1 

6
nrupul
Sample Output 1

No
Hint

In the sample test case, the value stored inN = 6, and the value stored instr = "nrupul"

In this case, the reversed string is not equal to the original string, therefore, the output is no.
  */

function checkPalindrome(N, str) {
    //write code here
  let bag = "";
  for(let i =str.length-1; i>=0;i--){
      bag += str[i];
  }
  let bag1 = "";
  for(let i = 0; i<N;i++){
      bag1 += str[i];
  }
  if(bag===bag1){
      console.log("Yes");
  }
  else {
      console.log("No");
  }
}