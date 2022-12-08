/*
Description

Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?


Input
Input Format :

The first line of the input contains a single integer T denoting the number of test cases.

The description of T test cases follows.The first and only line of each test case contains a single integer N.

Constraints :

1 <= T <= 100

1 <= N <= 10^12


Output
For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.


Sample Input 1 

5
1
2
10
25
200
Sample Output 1

Yes
No
Yes
No
Yes
Hint

Output Explanation :

In the last case Nick can get Rs. 200 by first using 10x hack and then using 20x hack once.

1 -> 10 -> 200

*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+ input[0];
	let line = 1;
	for(let i = 0;i<tc;i++){
	    let k =+ input[line++];
	    
	    nickAndHacks(k);
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


function nickAndHacks(k) {
    function hack(k,i){
        if(k== i){
            return true;
        }
        else if(i > k) {
            return false;
        }
        else {
            return(hack(k, i*10) || hack(k,i*20));
        }
    }
    
    let flag = hack(k,1);
    if(flag) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }
}