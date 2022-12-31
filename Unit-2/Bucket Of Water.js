/*
Description

Alice hasNbuckets of water. Each bucket is characterized by two integers: the remaining water volumea[i]and the capacity of the bucketb[i](ai <= bi).Alice has chosen to pour all of the leftover water into only two buckets. PrintYESIf he can successfully do it, otherwise printNO.


Input
Input Format:-

The input contains the number of testcases T, then T testcases follows

The first line of the input contains single integerN, the number of buckets.

The second line of the input contains N space-separated integers, a[0], a[1], ..., a[N-1].

The third line of the input contains N space-separated integers, b[0], b[1], ..., b[N-1].

Constraints:-

1 <= T <= 10

2 <= N <= 10^5

0 <= a[i] <= b[i] <= 10^6


Output
Output Format:-

For T testcases, each line contains eitherYESorNO.


Sample Input 1 

2
2
3 5
3 6
3
6 8 9
6 10 12
Sample Output 1

YES
NO
Hint

TestCase 1:There are already 2 buckets, so the answer is "YES".

TestCase 2:We cannot pour all the water into two buckets. answer is "NO".
  */


function runProgram(input){
	// write code here
	input = input.trim().split("\n");
	let tc = + input[0].trim();
	let line = 1;
	
	for(let i = 0;i < tc; i++){
	    let n =+ input[line++].trim();
	    let water = input[line++].trim().split(" ").map(Number)
	    let bucket = input[line++].trim().split(" ").map(Number)
	    
	    bucketWater(n,water,bucket);
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

function bucketWater(n,water,bucket) {
   bucket.sort((a,b) => {
       return b-a;
   })
   
   let sum = bucket[0] + bucket[1]
   let wsum = 0;
   for(let i =0;i<n;i++){
       wsum += water[i]
   }
   
   if(wsum <= sum){
       console.log("YES")
   }
   else{
       console.log("NO")
   }
}