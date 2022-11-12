/*
Description

You are given a strings.

You need to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case).

(Refer to the sample test case for better understanding)


Input
Input Format

You are given a stringson first line

Constraints

There is at-least one word present in this string.


Output
Print resultant reversed string as mentioned in description.


Sample Input 1 

A Transformation in education
Sample Output 1

education in Transformation A
Hint

Sample 1 Explanation

The sentence has been reversed in the sense that the sequence in which the words were present in the initial sentence is reversed.

Also, there is no change in the case of characters present in the sentence.
  */

function masaiSentenceReverse(s) {
  //write code here
 let arr = s.split(" ");
 let sum = "";
 for(let i = arr.length-1 ;  i>=0; i--){
     sum += arr[i] + " "
 }
 console.log(sum)
}