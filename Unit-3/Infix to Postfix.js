/*
Description

You are given an infix expression, you need to convert it to a postfix expression.

Infix expression is an expression that is in the form of (a operator b). eg. a + b, a * b.

Postfix expression is an expression that is in the form of (a b operator). eg. a b +, a b *.

Note : This question is optional
Below is the algorithm to solve it, in case this excites you
Algorithm - Infix to Postfix Conversion
1. Scan the entire expression left to right. 

2. If the character is an operand, add it to the final postfix expression, as the relative ordering of the operands 
is same in postfix and infix expression.

3. If the character is an opening bracket, put it in the stack.

4. If the character is a closing bracket, pop all the elements from the stack, 
until an opening bracket is met. If the opening bracket is not met, and the stack becomes empty, 
then the given infix expression is invalid. 
Brackets in postfix expressions are superfluous, therefore, pop out the bracket, without adding it into the postfix expression.

5. If the character is an operator, pop out all the operators, until the stack becomes empty, 
or the character at the top of the stack has a lower priority than the current character. 

6. After the entire expression is scanned, pop off all the elements from the stack, 
until the stack becomes empty, and add it to the final postfix expression. 

7. Finally, print the postfix expression. 

Priority Order -> (^) > (*,/) > (+,-).
Operators at the same level have same priority. 

Brackets free the expression off the priorities, which the algorithm ensures is taken care of.



Input
Input Format

First-line of input contains the infix expression

Constraints

Number of the operands<=26


Output
Print the postfix expression


Sample Input 1 

a+b-c+d*(e-f)/g+(h*(i/j))
Sample Output 1

ab+c-def-*g/+hij/*+
  */

function infix2Postfix(str) {
    let stack = [];
    let postFix = "";
    
    for(let i = 0;i < str.length; i++){
        
        if(char(str[i])) postFix += str[i];
        
        else if(str[i] === "(") stack.push("(");
        
        else if(str[i] === ")") {
            while(stack[stack.length-1] !== "("){
                postFix += stack[stack.length - 1];
                stack.pop();
            } 
            stack.pop();
        }
        else {
            while(stack.length !== 0 && (priority(str[i]) <= priority(stack[stack.length-1]))){
                postFix += stack[stack.length -1];
                stack.pop();
            }
            stack.push(str[i]);
        }
    }
    
    while(stack.length !== 0){
        postFix += stack[stack.length - 1];
        stack.pop();
    }
    
    console.log(postFix)
}

function priority(x) {
    if(x === "^") return 3;
    else if(x === "/" || x === "*") return 2;
    else if(x === "+" || x === "-") return 1;
    else return 0;
} 

function char(x) {
    if((x >= "a" && x <= "z") || (x >= "A" && x <= "Z") || (x >= "0" && x <= "9")) return 1;
    else return 0;
}