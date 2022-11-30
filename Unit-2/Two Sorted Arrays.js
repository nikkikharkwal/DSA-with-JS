/*
Description

You are given two arraysAandB, each of size N.
The first array A, is sorted in ascending order, while the second array is sorted in descending order.
You have to find the number of elements common in both the arrays.
Try to solve this without using any extra space.


Input
The first line of the input containsT, the number of test cases.

The first line of each test case, contains N, the number of elements in the arrayAandB

The next line of the test case, containsNspace separated integers, denoting the number of elements of the arrayA

The next line containsNspace separated integers, denoting elements of the arrayB.

Constraints

1 <=T<= 10

1 <=N<= 1000000

1 <=A[i]<= 1000


Output
For each test case, print the number of elements common in both the arrays, on a new line.


Sample Input 1 

1
6
1 2 2 3 4 5
4 4 3 2 1 1
Sample Output 1

4
Hint

In the sample test case, the number of elements common in both the arrays are {1,2,3,4}. Therefore, the required output is 4.
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+ input[0]
	let line = 1;
	for(let i = 0;i<tc;i++){
	    let n =+ input[line++].trim()
	    let arr1 = input[line++].trim().split(" ").map(Number)
	    let arr2 = input[line++].trim().split(" ").map(Number)
	    
	    sortedArrays(n,arr1,arr2);
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

function sortedArrays(n,arr1,arr2) {
    let flag = 0,l=0,r=n-1;
    while(l<=n-1 && r>=0){
        if(arr1[l]==arr2[r]) flag++,l++,r--;
        else if(arr1[l] > arr2[r]) r--;
        else l++;
    }
    console.log(flag)
    
}