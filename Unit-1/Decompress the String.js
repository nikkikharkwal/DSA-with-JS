/*
Description

Given a string of lowercase characters and integers, decompress the string under the following rules:

If an integer is encountered, the character just before it gets added to a final string as many times as the number
For instance, if the string isa3b2=> the output should beaaabbbecauseais followed by 3, andbis followed by 2

Complete the function to decompresses the string and print it.


Input
Input Format

Input contains one string

Constraints

1 <= Length of S <= 100


Output
Output the decompressed string


Sample Input 1 

a3b2
Sample Output 1

aaabb
Hint

As explained in description.
  */

function decompressString(string) {
  //write code here
  let bag = "";
  for(let i = 0; i < string.length; i=i+2){
      for(let j = 0; j < string[i+1]; j++){
          bag += string[i];
      }
  }
  console.log(bag);
}