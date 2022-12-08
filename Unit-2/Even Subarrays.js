/*
Description

You are given an array of N elements. You have to find all the subarrays, which have all the numbers in the subarray even.


Input
The first line contains N the size of the array. The next line contains N space separated integers, denoting the elements in the array.

Constraints

1 <= N <= 100

1 <= A[i] <= 100


Output
Print a single integer denoting the count of all the subarrays which have all the elements in them even.


Sample Input 1 

3
1 2 3
Sample Output 1

1
Hint

In the sample test case, all the subarrays of the given array are

[1]

[1, 2]

[1, 2, 3]

[2]

[2, 3]

[3]

There is only one subarray with all the elements even -> [2]. Therefore, the answer is 1.
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let n =+ input[0].trim()
	let arr = input[1].trim().split(" ").map(Number)
	
	evenSubarrays(n,arr);
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

function evenSubarrays(n,arr) {
    let i = 0,flag = 0;
    while(i<n) {
        if(arr[i]%2==0) {
            flag++;
            for(let j = i+1;j<n;j++){
                if(arr[j]%2==0){
                    flag++;
                }
                else {
                    break;
                }
            }
        }
        i++;
    }
    console.log(flag);
}