/*
Description

You are given an array ofNintegers, such that it denotes the number of rupees spent byOscarforNdays

You have to find the minimum amount of money he has spent onKconsecutive days

Declare a variable with the nameOscar, and find the minimum amount of money that he has spent during a consecutive period ofKdays

Note : The days in which he earns more money that what he spends, are given as negative numbers in the array


Input
Input Format

The first line contains the number of testcases T

For each testcase, the first line contains the number N and K

The second line of each testcase consists of the elements of the array

Constraints

1<=T<=10

1<=N<=10^5

1<=K<=N

-1000<=arr[i]<=1000


Output
Print the minimum sum of consecutiveKelements, denoting the amount of money thatOscarhas spent consecutively forKdays

Sample Input 1 

2
5 3
9 9 -5 9 5 
5 4
2 7 6 2 -5 
Sample Output 1

9 
10
Hint

For the first testcase the different amount of money spent on K consecutive days is : 13 13 9, and minimum is 9, hence the output is 9

For the first testcase the different amount of money spent on K consecutive days is : 17 10, and minimum is 10, hence the output is 10

*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+input[0].trim()
	let line = 1;
	for(let i = 0;i<tc;i++){
	    let [n,k] = input[line++].trim().split(" ").map(Number)
	    let arr = input[line++].trim().split(" ").map(Number)
	    minimumExpense(n,k,arr);
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

function minimumExpense(n,k,arr) {
    let Oscar = 0;
    let temp;
    for(let i =0; i<=k-1;i++){
        Oscar += arr[i];
        // console.log(Oscar)
    }
    temp = Oscar;
    for(j=k;j<n;j++){
        temp = temp - arr[j-k] + arr[j]
        Oscar = Math.min(temp, Oscar)
    }
    console.log(Oscar)
}