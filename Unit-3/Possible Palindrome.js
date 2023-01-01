/*
Description

Given a strings, returntrueif a permutation of the string could form a palindrome.


Input
Input Format

The first line contains the number of testcases T

Each testcase contains a string S

Constraints

1<= length of S <= 10^5

1<=T<=10


Output
Print "Yes" if a permutation of S can be palindrome, else print "No"


Sample Input 1 

1
carerca
Sample Output 1

Yes
Hint

"carerca" has a permutation "carerac" which is palindrome
*/

function possiblePalindrome(str) {
    let count = 0;
    let obj = {};
    for(let i =0;i<str.length;i++){
        obj[str[i]] = obj[str[i]]+1 || 1;
    }
    console.log(obj)
    for(let i in obj){
        if(obj[i]%2==1){
            count++; //1
        }
    }
    
    if(count > 1) console.log("No")
    else console.log("Yes")
}