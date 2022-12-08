/*
Description

You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

Note: You must not use sort() function in your entire code


Input
Input Format :

First line contains N which is the number of integers present in both the arrays.

Second line contains N sorted integers which are elements of first array.

Third line contains N sorted integers which are elements of second array.



Constraints :

N < 1000


Output
Output the array formed after merging elements such that it is sorted


Sample Input 1 

4
1 5 7 9
2 4 6 8
Sample Output 1

1 2 4 5 6 7 8 9
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let n = +input[0].trim()
	let arr1 = input[1].trim().split(" ").map(Number)
	let arr2 = input[2].trim().split(" ").map(Number)
	performMerging(n,arr1,arr2);
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

function performMerging(n,arr1,arr2) {
    let i = 0,j=0;
    let arr3 = new Array(2*n)
    let index = 0;
    while(i<n && j<n){
        if(arr2[i] > arr1[j]){
            arr3[index++] = arr1[j];
            j++;
        }
        else{
            arr3[index++] = arr2[i];
            i++;
        }
    }
    while(j<n){
        arr3[index++] = arr1[j];
        j++;
    }
    while(i<n){
        arr3[index++] = arr2[i];
        i++;
    }
    
    console.log(arr3.join(" "))
}