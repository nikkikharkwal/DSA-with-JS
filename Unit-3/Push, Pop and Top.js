/*
Description

There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

The next n line contains one of the following 3 operations:

1 x : Push x to the top of the stack.

2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

For better understanding, read sample test case explanation


Input
Input Format:

First line of test case contains n.

In the next n lines there can be one of the following three possible inputs:

1 separated by an integer: In that case, you have to push that integer to stack

2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

3 : Print the top element of the stack (see Output Format).

Constraints :

N<1000


Output
Whenever the query (out of the n queries) is 3, print top element of stack.


Sample Input 1 

6
1 15
1 20
2
3
2
3
Sample Output 1

15
Empty!
Hint

Sample Test Case Explanation :

There are 6 different operations to be performed on the stack.

In first operation, we are pushing 15 to the stack

In second operation, we are pushing 20 to the stack

In third operation, we are popping (removing) 20 from the stack.

In fourth operation, we have to print the top element and since stack is not empty and has 15 at the top. Print 15.

In fifth operation, we are popping the top element from the stack and since there is just one element present in the stack, the stack will become empty after performing this operation.

In sixth operation, you have to print the top element and since the stack is already empty, output "Empty!"
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+input[0].trim()
	let line = 1;
	let stack = []
	for(let i = 0;i<tc;i++){
	   let k = input[line++].trim().split(" ").map(Number);
	   
    if(k[0]===1){
        stack.push(k[1]);
    }
    else if(k[0]==2){
        stack.pop()
    }
   else if(k[0]===3){
       
       if(stack.length==0){
           console.log("Empty!")
       }
       else {
           
        console.log(stack[stack.length-1]) ;
       }
    }
	}
}

if (process.env.USER === "") {
    runProgram(``);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}



