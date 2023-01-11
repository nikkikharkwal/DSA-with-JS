/*
Description

Given a string containing three types of parenthesis : (), [], {}, write a program to check whether the string contains a valid sequence of parentheses.


Input
Input Format

Input contains one line which is the string with parentheses whose validity you have to check

Constraints

length of string <= 1000


Output
Output Format

Print "balanced" (without quotes) if it has a sequence of valid parentheses, otherwise print "unbalanced" (without quotes)


Sample Input 1 

(((((((((())))))))))
Sample Output 1

balanced
Sample Input 2 

[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
Sample Output 2

balanced

*/

function stringsParenthesis(str) {
   let stack = [];
   let flag = 0;
   
   for(let i =0;i<str.length;i++){
       if(isOpen(str[i]) || isClosed(str[i])){
           flag++;
       }
       if(isOpen(str[i])){
           stack.push(str[i]);
       }

       if(isParenthesis(stack[stack.length-1],str[i])){
           stack.pop();
       }
   }

   if(stack.length === 0 && flag%2===0) console.log("balanced");
   else console.log("unbalanced");
   
}

function isOpen(c){
    return c == "(" ||
           c == "{" ||
           c == "[" 
}

function isClosed(c){
    return c == ")" ||
           c == "}" ||
           c == "]" 
}

function isParenthesis(a,b){
    return (a == "(" && b == ")") ||
           (a == "{" && b == "}") ||
           (a == "[" && b == "]")
}