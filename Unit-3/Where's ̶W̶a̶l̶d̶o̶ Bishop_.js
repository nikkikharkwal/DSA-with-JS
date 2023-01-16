/*
Description

Ankush has an 8×8 chessboard whose rows are numbered from 1 to 8 from top to bottom and whose columns are numbered from 1 to 8 from left to right.

Ankush has placed exactly one bishop on the chessboard.

The bishop is not placed on the edges of the board. (In other words, the row and column of the bishop are between 2 and 7, inclusive.)

The bishop attacks in all directions diagonally, and there is no limit to the distance which the bishop can attack.

Note: that the cell on which the bishop is placed is also considered attacked.

Ankush has marked all squares the bishop attacks, but forgot where the bishop was!

Help Ankush find the position of the bishop.

Hint : The position of the Bishop can be identified by the point where 2 diagonals meet

Input
Input Format
The first line contains the number of test cases t.

Each test case consists of 8 lines, each containing 8 characters.

Each of these characters is either '#' or '.', denoting a square under attack and a square not under attack, respectively.

Constraints
1 <=t<= 30


Output
Output Format
For each test case, output two integers r and c (2≤r,c≤7) — the row and column of the bishop.

The input is generated in such a way that there is always exactly one possible location of the bishop that is not on the edge of the board.


Sample Input 1 

2
.....#..
#...#...
.#.#....
..#.....
.#.#....
#...#...
.....#..
......#.
#.#.....
.#......
#.#.....
...#....
....#...
.....#..
......#.
.......#
Sample Output 1

4 3
2 2
Hint

The first test case is pictured in the statement.

Since the bishop lies in the intersection row 4 and column 3, the correct output is 4 3.
*/

function runProgram(input){
	// write code here
	input = input.trim().split("\n");
	let tc =+ input[0].trim();
	let line = 1;
	
	for(let i =0;i<tc;i++){
	    let pos = [];
	    for(let j = 0;j < 8;j++){
	        pos.push(input[line++].trim());
	    }
	    
	    whereisWaldoBishop(pos);
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


function whereisWaldoBishop(pos){
    for(let i = 0;i<8;i++){
        let flag = 0;
        
        for(let j =0;j < 8;j++){
            if(pos[i][j] === "#"){
                flag++;
                
                if(flag >= 2){
                    for(let k = i;k < 8;k++){
                        let count = 0;
                        let col = 1;
                        let row = 1;
                        
                        for(let z = 0; z < 8;z++){
                            if(pos[k][z] === "#"){
                                count++;
                                col = k + 1;
                                row = z + 1;
                            }
                        }
                        
                        if(count === 1){
                            console.log(col,row);
                            return;
                        }
                    }
                }
            }
        }
    }
}