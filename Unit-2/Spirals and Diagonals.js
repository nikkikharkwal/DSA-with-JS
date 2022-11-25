/*
Description

You are given an integer n. The next line is an array A which contains n*n elements. The spiral traversal of a square matrix of dimension (n x n) results in the given array.

Calculate the sum of all elements which are on the diagonals of the square matrix.

Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100)

The second line contains n*n integers (1 ≤ Ai ≤ 1000) - The spiral traversal of a square matrix of dimension n x n.


Output
For each test case, print the answer: The sum of elements present in the diagonals of the matrix.


Sample Input 1 

3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9
Sample Output 1

1
10
25
Sample Input 2 

1
4
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
Sample Output 2

68
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+ input[0]
	let line = 1;
	for(let i =0;i<tc;i++){
	    let n =+input[line]
	    line++;
	    let array = input[line++].trim().split(" ").map(Number)
	    spiralDiagonals(array,n)
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

function spiralDiagonals(array,n) {
    let matrix = []
    for(let i =0;i<n;i++){
        let arr = []
        for(let j =0;j<n;j++){
            arr.push()
        }
        matrix.push(arr)
    }
    let left = 0,bottom=n-1,right=n-1,top=0,index=0;
    while(index < n*n){
        for(let i = left;i<=right;i++){
            matrix[top][i] = array[index++]
        }
        top++;
        for(let i =top;i<=bottom;i++){
            matrix[i][right] = array[index++]
        }
        right--;
        for(let i = right;i>=left;i--){
            matrix[bottom][i] = array[index++]
        }
        bottom--;
        for(let i =bottom;i>=top;i--){
            matrix[i][left] = array[index++]
        }
        left++
    }
    let sum = 0;
    for(let i =0 ;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(i==j || i+j==n-1){
                sum += matrix[i][j]
            }
        }
    }
    console.log(sum)
}