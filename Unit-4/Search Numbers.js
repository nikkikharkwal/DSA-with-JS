/*
Description 

You are given an array a of N integers a1,a2,…,aN.
Your task is to respond to the queries like "How many numbers' values are between

Input 
Input Format
The first line of the input contains N — the length of the array.
The second line contains N space-separated integers a1,a2,…,aN.
The third line contains integer k — the number of queries.
The following k lines contain a pair of integers l r — query, described above.

Constraints
1 <= N <= 10^5
-10^9 <= a[i] <= 10^9
1 <= k <= 10^5
-10^9 <= l <= r <= 10^9


Output

The output must consist of k integers — responses for the queries.

Sample Input 1
5
10 1 10 3 4
4
1 10
2 9
3 4
2 2

Sample Output 1

5 2 2 0

Hint

For the first query, there are 5 numbers (10,1,10,3,4) in an array that lie between 1 and 10 inclusive, so the answer is 5.
For the second query, there are 2 numbers (3,4) in an array that lie between 2 and 9 inclusive, so the answer is 2.
For the third query, there are 2 numbers (3,4) in an array that lie between 3 and 4 inclusive, so the answer is 2.
For the fourth query, there are no numbers in an array that lie between 2 and 2 inclusive, so the answer is 0.

*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n");
	let n =+ input[0].trim();
	let arr = input[1].trim().split(" ").map(Number);
	arr.sort((a,b) => {return a - b});
	let k =+ input[2].trim();

	let line = 3;
	let res = "";
	
	for(let i = 0 ; i < k;i++){
	    let s = input[line++].trim().split(" ").map(Number);
	    let x = s[0];
	    let y = s[1];
	    
	    if(x > arr[n-1]){
	        res += 0 + " ";
	    }
	    else {
	        let x1 = searchNumber(arr,x,y,true);
	        let y1 = searchNumber(arr,x,y,false);
	        res += (y1 - x1 + 1) + " ";
	    }
	}
	
	console.log(res);
}

let ans = 0;
function searchNumber(arr,x ,y ,bool){
    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high){
        let mid = Math.floor(low + (high-low)/2);
        if(bool){
            if(arr[mid] >= x){
                ans = mid;
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        else {
            if(arr[mid] <= y){
                ans = mid;
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
    }
    return ans;
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
