/*
Description

"Shyam" loves to play with strings of paranthesis. So, he decided to assign an ID to each opening and closing bracket. Help Shyam to assign the ID of brackets.

Note 1:See sample tests for better understanding.

Note 2:String is not necessary to be balanced. Consider 1-based ID's.


Input
Input Format:

The first line of input contains the number of testcasesT, thenTcases follow.

The first line ofithtestcase contains a single integerN.

The second line ofithtestcase contains a strings.

Constraints:

1 <= T <= 10

1 <= N <= 10^5

s[i] can be either'('or')'.


Output
Output Format:

Print T lines,

Inithline printNspace-separated integers in whichjthinteger denotes the id ofjthbracket ofithtestcase.


Sample Input 1 

2
6
(((()(
6
))(())
Sample Output 1

1 2 3 4 4 5
1 2 3 4 4 3
Hint

TestCase 1:s= "(((()("

id of opening bracket s[0] = 1

id of opening bracket s[1] = 2

id of opening bracket s[2] = 3

id of opening bracket s[3] = 4

id of closing bracket s[4] = 4 (closing of s[3])

id of opening bracket s[5] = 5

TestCase 2:s= "))(())"

id of closing bracket s[0] = 1

id of closing bracket s[1] = 2

id of opening bracket s[2] = 3

id of opening bracket s[3] = 4

id of closing bracket s[4] = 4 (closing of s[3])

id of closing bracket s[5] = 3 (closing of s[2])
*/

function findIdBrackets(n,str) {
    let stack = [];
    let id = [];
    let num = 1;
    for(let i =0;i<n;i++){
        if(str[i] == "("){
            stack.push(num,str[i])
            id.push(num);
            num++;
        }
        if(str[i] == ")"){
            if(stack[stack.length-1] == "("){
                stack.pop();
                id.push(stack.pop());
            }
            else{
                id.push(num++);
            }
            
        }
    }
    console.log(id.join(" "))
}