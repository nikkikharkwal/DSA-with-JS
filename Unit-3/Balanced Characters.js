/*
Description

Given a string consisting of lowercase and uppercase characters both and you have to consider lowercase as opening character and its corresponding uppercase as closing character. Now you have to find whether the given string is balanced or not.

Given string is balanced when

1) lowercasecharacters must be closed by the uppercase of same characters.

2) lowercase characters must be closed in the correct order.


Input
Input Format

First-line contains T, no of test cases.

First-line of each test case contains N, the length of the string s.

Second-line of each test case contains string s of length N.

Constraints

1 <= T <= 10

1 <= N <= 10^5


Output
For each test case print True if the string is balanced and False if string is not balanced.


Sample Input 1 

5
2
aA
6
aAbBcC
2
cD
4
caCA
4
daAD
Sample Output 1

True
True
False
False
True
Hint

For the first test case, small "a" is closed by big "A" therefore string is balanced.

For the second test case, we can divide string into three parts "aA", "bB", and "cC" and as we can see separately all three are balanced therefore whole string is balanced.

For third test case, "c" can't be balanced by "D" therefore string is unbalanced.

For the fourth test case, the ordering of open and closed characters is not done properly therefore it is unbalanced string.
  */

function balancedCharacters(n,str){
    let stack = [];
    for(let i =0;i<n;i++){
        if(isSmall(str[i])){
            stack.push(str[i]);
        }
        else {
            while(stack.length !== 0 && (isLower(stack[stack.length -1]) === isUpper(str[i]))){
                stack.pop();
            }
        }
    }
    
    console.log(stack.length ? "False" : "True");
}
function isSmall(c){
    if(c >= "a" && c <= "z") return true;
    else return false;
}
function isLower(c){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0;i<26;i++){
        if(c === lower[i]){
            return i;
        }
    }
}

function isUpper(c){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0;i<26;i++){
        if(c === upper[i]){
            return i;
        }
    }
}