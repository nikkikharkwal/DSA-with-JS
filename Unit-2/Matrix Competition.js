/*
Description

You are given two matrices (2D array). The first array A (n rows and m columns) and second array B (i rows and j columns).

Output sum of the matrix which is greater than the sum of other matrix.

PLEASE DON'T CONVERT YOUR 2D ARRAY TO 1D ARRAY FOR THIS TASK** because this question is to make you comfortable in 2d array


Input
Input Format

First line contains n and m (number of rows and columns of first matrix).

Next n lines contain m elements which are elements of first matrix.

Next line contains i and j (number of rows and columns of second matrix).

Next, i lines contain j elements which are elements of the second matrix.

Constraints

n<100

m<100

i<100

j<100




Output
Output one number, which is the sum of elements of that matrix whose sum is greater than other.


Sample Input 1 

3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8
Sample Output 1

42
Hint

Sample 1 Explanation

Sum of elements present in the first matrix is 42 and the sum of elements present in the second matrix is 32.

So, the answer is 42.
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let line = 0;
	    let z = input[line].trim().split(" ").map(Number)
	    let n = z[0]
	    let m = z[1]
	    line++
	    let arr = []
	    for(let b = 0;b<n;b++){
	        arr.push(input[line].trim().split(" ").map(Number))
	        line++
	    }
	    let k = input[line].trim().split(" ").map(Number)
	    let i = k[0]
	    let j = k[1]
	    line++
	    let mat = []
	    for(let c = 0;c<i;c++){
	        mat.push(input[line].trim().split(" ").map(Number))
	        line++
	    }
	    matrixCompetition(n,m,i,j,mat,arr)
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

function matrixCompetition(n,m,i,j,mat,arr) {
    let sum1 = 0,sum2 = 0; 
    for(let a = 0;a<n;a++){
        for(let b = 0;b<m;b++){
            sum1 += arr[a][b]
        }
    }
    for(let c = 0;c<i;c++){
        for(let d = 0;d<j;d++){
            sum2 += mat[c][d]
        }
    }
    console.log((sum1>sum2)? sum1:sum2)
}