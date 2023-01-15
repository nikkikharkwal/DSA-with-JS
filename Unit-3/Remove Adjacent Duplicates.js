/*
Description

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Print the final string after all such duplicate removals have been made. It can be proven that the answer is unique.


Input
Input Format

The first line contains the number of testcases - T

For each testcase:

The first line contains the length of the string - n
The second line contains the string consisting of lowercase letters
Constraints

1<=t<=10

1<=n<=10^5


Output
Print the final string after all such duplicate removals have been made.


Sample Input 1 

1
6
abbaca
Sample Output 1

ca
Hint

For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move. The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
  */


function removeAdjacentDuplicates(n,str){
    let stack = [];
    
    for(let i =0;i<n;i++){
        if(stack[stack.length -1] == str[i]){
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }
    
    console.log(stack.join(""))
}


/*
Remove Adjacent Duplicates - Editorial
Difficulty: Easy
Prerequisite: Strings, Stacks
Problem Statement
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Print the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

Hint.
Use an output stack to keep track of only non duplicate characters.

Short Explanation
Current string character is equal to the last element in stack? Pop that last element out of stack.
Current string character isnotequal to the last element in stack? Add the current character into stack.
Detailed Explanation
Initiate an empty output stack.
Iterate over all characters in the string.
Current element is equal to the last element in stack? Pop that last element out of stack.
Current element is not equal to the last element in stack? Add the current element into stack.
Convert stack into string and return it.
Pseudocode

    s // input
    string ans = "";
    for (auto ch : s)
        if (!ans.empty() && ans.back() == ch)
            ans.pop_back();
        else
            ans.push_back(ch);
    print ans;
Time Complexity:
O(N)for traversing the string

Space Complexity:
O(N)for storing the final string.
  */
