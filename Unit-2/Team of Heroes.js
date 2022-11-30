/*
Description

India and New Zealand are going to be playing in the final of the World Test Championship, and Virat Kohli, the captain of the Indian Cricket Team, desperately wants to win the game

Now Virat Kohli is very superstitious. He has a superstitious that if the sum of the jerseys of the captain and the vice - captain of the team is exactly equal toK, the team wins one hundred percent.

Now, he has N jersey numbers given in the form of an array, and he has to find out if there are two jersey numbers, whose sum is equal toKor not. The jersey numbers have been kept in strictly increasing order. Help him, accomplish this task


Input
The first line of the input containsT, the number of test cases.

The first line of each test case, containsN, the number of Jerseys, andKis the required sum

The next line containsNspace separated integers, indicating the jersey numbers

1 <= T <= 10

2 <= N <= 1000, 2 <= B <= 3*10^5

1 <= Ai <= 10^5


Output
For each test case, printYes, if there are two jerseys for whom the sum of jersey numbers isK, else printNo, on a new line.


Sample Input 1 

2
5 31
10 11 13 17 21
5 44
10 11 13 17 21
Sample Output 1

Yes
No
Hint

In the first test case, the sum of jersey number 21 and that of 10 is equal to K = 31, therefore, the answer isYes

In the second test case, no two jerseys have the sum equal toK = 44. Therefore, the answer isNo.

  */

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let tc =+ input[0]
	let line = 1;
	for(let i = 0;i<tc;i++){
	    let [n,k] = input[line++].trim().split(" ").map(Number)
	    let arr = input[line++].trim().split(" ").map(Number)
	    teamOfHeroes(n,k,arr);
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

function teamOfHeroes(n,k,arr) {
    function check(n,k,arr){
        
    let l = 0,r=n-1;
    while(l<r){
        if(arr[l]+arr[r]==k) return true;
        else if(arr[l]+arr[r]>k) r--;
        else l++;
    }
    return false;
    }
    if(check(n,k,arr)==true) console.log("Yes")
    else console.log("No")
}