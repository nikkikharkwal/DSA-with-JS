
// Description

// You are given a 2D array, such that the dimensions of the 2D Array are stored in the variableNandM

// Each cell of the the 2D array, contains the following symbols --,/,*

// The meaning of each of the symbols is as follows -'*' -> 0, '-' -> 1, '/ -> 2'

// You have to make a string according to the values present in the 2D array, for each row

// For example, consider the value stored inN = 3, andM = 3. The matrix given is as follows

// */*
// /-/
// --*
// Therefore, converting each symbol into its corresponding number we get
// 020
// 212
// 110
// which is the required answer


// Input
// The first line of the input contains the value stored inNandM

// The nextNline containMcharacters each, denoting the elements of the 2D array


// Output
// Print the required output, as explained in the problem statement

// Sample Input 1 

// 3 3
// */*
// /-/
// --*
// Sample Output 1

// 020
// 212
// 110
// Hint

// In the sample test case, the value stored inN = 3, andM = 3. The matrix given is as follows

// */*
// /-/
// --*
// Therefore, converting each symbol into its corresponding number we get
// 020
// 212
// 110


function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let x = input[0].trim().split(" ").map(Number)
	let n = x[0]
	let m = x[1]
	let line = 1;
	let arr = []
	for(let i = 0;i<n;i++){
	    arr.push(input[line].trim().split(""))
	    line++;
	}
	Characters2DArray(n,m,arr)
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

function Characters2DArray(n,m,arr)  {
    for(let i = 0;i<n;i++){
        for(let j = 0; j<m;j++){
            if(arr[i][j]=="*"){
                arr[i][j]=0
            }
            else if(arr[i][j]=="/"){
                arr[i][j]=2
            }
            else if(arr[i][j]=="-"){
                arr[i][j]=1
            }
        }
    }
    for(let i = 0;i<n;i++){
    let temp = ""
        for(let j = 0;j<m;j++){
            temp += arr[i][j]
        }
        console.log(temp)
    }
}
  