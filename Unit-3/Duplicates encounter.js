/*
Description

Given a string of lowercase characters in range ascii[‘a’..’z’].

You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).


Input
Input Format

First and the only line contains string

Constraints

Length of string < 1000


Output
Output Format

Length of string < 1000


Sample Input 1 

aaabccddd
Sample Output 1

abd
*/

function duplicatesEncounter(str){
    let ans = "";
    let i = 0;
    
    while(i<str.length){
        if(str[i] == str[i+1]) {
            i += 2;
        }
        else{
            ans += str[i++];
        }
    }
    
    console.log((ans.length) ? ans : "Empty String")
}