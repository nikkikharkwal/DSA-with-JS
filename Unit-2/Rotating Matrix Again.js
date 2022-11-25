/*
Description

You are given an n x n 2D matrix.

Rotate the matrix by 90 degrees (clockwise).

You need to do this without using any lists.

(You can use a list for storing the input)


Input
Input Format

A single line will contain the matrix

Constraints

n <= 1000

Ai <= 10000




Output
A single containing the rotated matrix


Sample Input 1 

1 2 3 4 5 6 7 8 9
Sample Output 1

7 4 1 8 5 2 9 6 3 
*/

function runProgram(input){
	// write code here
	input = input.trim().split(' ').map(Number)
	let x = Math.sqrt(input.length)
	let index = 0;
	let arr = []
	for(let i = 0;i<x;i++){
	    let c = []
	    for(let j = 0;j<x;j++){
	        c.push(input[index++])
	    }
	    arr.push(c)
	}
	rotatingMatrix(arr,x)
	
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
function rotatingMatrix(arr,x) {
    let matrix = []        
    let index = 0;
    for(let i = 0;i<x;i++){
        let a = []
        for(let j=x-1;j>=0;j--){
            a.push(arr[j][index])
        }
        index++
        matrix.push(a)
    }
    console.log(matrix.toString().replace(/,/g, " "))
}