/*
Description

You are given a string consisting of characters 'a' and 'b' only you have to tell the minimum number of changes required to convert this string into the string having only one type of character.


Input
Input Format

The first line contains integer numbers N - the length of the string.

The second line contains the string s.

Constraints

2 <= N <= 100


Output
Print the minimum operation required.


Sample Input 1 

5
abaab
Sample Output 1

2
Hint

We can change the whole string to "aaaaa" in 2 operations or "bbbbb" in 3 operations so the minimum answer is 2.
*/

function singleCharacterString(n,str){
    let obj = {};
    
    for(let i =0;i<n;i++){
        if(obj[str[i]] ===  undefined){
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    
    let ans = Infinity;
    for(let i in obj){
        if(ans > obj[i]){
            ans = obj[i];
        }
    }
    console.log(ans)
}