/*
Description

Minions are of 26 types, from 'a' to 'z'. If two Minions of same type finds themselves besides each other, they will kill each other.

You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. i.e Further No Minion will kill other Minion.

If no Minion survived a after all the fighting, print "-1".


Input
Input Format

First Line contains 'N', size of strings of Minions.

Second Line contains S, string of Minions.

Constraints

1 <= N <= 10^6


Output
Single line with stable Minion string or "-1"


Sample Input 1 

5
aabbc
Sample Output 1

c
Sample Input 2 

12
abbabaadcbbc
Sample Output 2

bd
Sample Input 3 

2
aa
Sample Output 3

-1
Hint

1st Test case :-

aabbc => bbc => c

2nd Test Case:-

abbabaadcbbc => aabaadcbbc => aabdcbbc => aabdcc =>bdcc=> bd
*/
function warMinions(n,str) {
    let stack = [];
    for(let i =0; i< str.length;i++){
        if(stack[stack.length-1] == str[i]){
            stack.pop();
        }
        else{
            stack.push(str[i]);
        }
    }
    if(stack.length === 0){
        console.log(-1);
    }
    else{
        let temp = "";
        for(let i =0;i<stack.length;i++){
            temp += stack[i];
        }
        console.log(temp);
    }
}