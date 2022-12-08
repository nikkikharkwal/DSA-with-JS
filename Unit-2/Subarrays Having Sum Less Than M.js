/*
Description

Given an array A of size n with positive numbers, find the total number of subarrays that have sum < m.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) and M as mentioned in the question.

The second line of the test case contains n integers (1 ≤ Ai ≤ 100).


Output
For each test case, print the answer: The number of subarrays.


Sample Input 1 

1
5 5
1 5 1 3 2
Sample Output 1

5
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+ input[0].trim()
	let line = 1;
	for(let i = 0;i<tc;i++){
	    let [n,m] = input[line++].trim().split(" ").map(Number)
	    let arr = input[line++].trim().split(" ").map(Number)
	    subarraysWithLessSum(n,m,arr);
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

function subarraysWithLessSum(n,m,arr) {
        let start = 0, end = 0;
        let count = 0, sum = arr[0];
  
        while (start < n && end < n) {
            if (sum < m) {
                end++;
  
                if (end >= start)
                    count += end - start;
                if (end < n)
                    sum += arr[end];
            }
            else {
                sum -= arr[start];
                start++;
            }
        }
  
        console.log(count);
}