/*
Description

Once upon a time Mike and Mike decided to come up with an outstanding problem for some stage of ROI (rare olympiad in informatics). One of them came up with a problem prototype but another stole the idea and proposed that problem for another stage of the same olympiad. Since then the first Mike has been waiting for an opportunity to propose the original idea for some other contest... Mike waited until this moment!

You are given an array a of n integers. You are also given q queries of two types:

Replace i-th element in the array with integer x.
Replace each element in the array with integer x.
After performing each query you have to calculate the sum of all elements in the array.


Input
Input Format

The first line contains two integers n and q — the number of elements in the array and the number of queries, respectively.

The second line contains n integers a1,…,an — elements of the array a.

Each of the following q lines contains a description of the corresponding query. Description begins with integer t (t∈{1,2}) which denotes a type of the query:

If t=1, then two integers i and x are followi — position of replaced element and it's new value.If t=2, then integer x is following — new value of each element in the array.

Constraints

1<=n,q<=10^5

1<=ai<=10^4

1<=x<=10^4


Output
Print q integers, each on a separate line. In the i-th line print the sum of all elements in the array after performing the first i queries.


Sample Input 1 

5 5
1 2 3 4 5
1 1 5
2 10
1 5 11
1 4 1
2 1
Sample Output 1

19
50
51
42
5
Hint

Consider array from the example and the result of performing each query:

Initial array is [1,2,3,4,5].
After performing the first query, array equals to [5,2,3,4,5]. The sum of all elements is 19.
After performing the second query, array equals to [10,10,10,10,10]. The sum of all elements is 50.
After performing the third query, array equals to [10,10,10,10,11]. The sum of all elements is 51.
After performing the fourth query, array equals to [10,10,10,1,11]. The sum of all elements is 42.
After performing the fifth query, array equals to [1,1,1,1,1]. The sum of all elements is 5.

*/
function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let x = input[0].trim().split(" ").map(Number)
	let n = x[0]
	let q = x[1]
	let arr = input[1].trim().split(" ").map(Number)
	let line = 2
	for(let i = 0;i<q;i++){
	    let query = input[line++].trim().split(" ").map(Number)
	    mikeRevenge(n,q,arr,query)
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
function mikeRevenge(n,q,arr,query){
    if(query[0]==1){
        arr[query[1]-1] = query[2]
            let sum = 0;
        for(let i = 0;i<n;i++){
            sum += arr[i]
        }
        console.log(sum)
    }
    else if (query[0]==2){
        let sumq = 0
        for(let i = 0;i<n;i++){
            arr[i] = query[1]
            sumq += arr[i]
        }
        console.log(sumq)
    }
    
}