/*
Description

Given a string of lowercase characters in range ascii[‘a’..’z’].

You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose


Input
Input Format

First and the only line contains string

Constraints

Length of string < 1000






Output
Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.


Sample Input 1 

aaabccddd
Sample Output 1

abd
Hint

Sample 1 Explanation

You can perform the following sequence of operations to get the final string:

aaabccddd -> abccddd -> abddd -> abd
*/

function reduceString(str) {
    let arr = [];
    let top = 0;
    
    while(top<str.length) {
        if(str[top]==str[top+1]){
            top++;
            top++;
        }
        else {
            arr.push(str[top]);
            top++;
        }
    }
    if(arr.length == 0) {
        console.log("Empty String")
    }
    else {
      console.log(arr.join(""));  
    }
    
}