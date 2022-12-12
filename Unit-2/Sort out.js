/*
Description

Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

Example:

A={4,5,3,7,1}

After sorting the new array becomes A={1,3,4,5,7}.

The required output should be "4 2 0 1 3"

NOTE: The indexing of the array starts with 0.

You can only write your own sorting algorithm must not use builtin functionality of sort()


Input
Input Format

The first line of input consists of the size of the array

The next line consists of the array of size m

Constraints

1<=m<=10000

0<=A[i]<=1000




Output
Output Format

Output consists of a single line of integers


Sample Input 1 

5
4 5 3 7 1
Sample Output 1

4 2 0 1 3
*/

function runProgram(input){
	// write code here
    input = input.trim().split("\n")
    let m = +input[0].trim();
    let A = input[1].trim().split(" ").map(Number)
    sortOut(m,A);
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


function sortOut(m,A) {
    let temp;
    let newTemp;
    let newArr = []
    for(let i = 0;i<m;i++){
        newArr.push(i)
    }
    for(let i =0;i<m-1;i++){
        isSwap = 0;
        for(let j = 0;j<m-i-1;j++){
            if(A[j]>A[j+1]){
                isSwap = 1;
                temp = A[j]
                A[j] = A[j+1]
                A[j+1] = temp;
                newTemp = newArr[j]
                newArr[j] = newArr[j+1]
                newArr[j+1] = newTemp;
            }
        }
        if(isSwap == 0){
            break;
        }
    }
    console.log(newArr.join(" "))
}