/*
Description

Given arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits.


Input
Input Format:

First-line contains a number of trains n

Second-line contains array containing arrival time of n trains

The third line contains an array containing departure time of n trains

Constraints:

n <= 100


Output
Output one number which is the minimum number of platforms required


Sample Input 1 

6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00
Sample Output 1

3
*/
function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let n =+ input[0].trim()
	let x = input[1].trim().split(" ")
	
	let arrival = [];
	
	for(let i =0;i< x.length ;i++){
	    let time = x[i].split(":").map(Number);
	    let t = time[0]*60 + time[1];
	    arrival.push(t);
	}
	
	let y = input[2].trim().split(" ")
	
	let dep = [];
	
	for(let i =0;i< y.length ;i++){
	    let dtime = y[i].split(":").map(Number);
	    let dt = dtime[0]*60 + dtime[1];
	    dep.push(dt);
	}
	
	minimumPlatformsRequired(n,arrival,dep);
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


function minimumPlatformsRequired(n,arrival,dep){
    dep.sort((a,b) => {return a - b});
    
    let platform = 1,min = 1,i=1,j=0;
    
    while(i<n){
        if(arrival[i]>=dep[j]){
            platform--;
            j++;
        }
        else{
            platform++;
            i++;
        }
        
        min = Math.max(min,platform)
    }
    
    console.log(min)
}