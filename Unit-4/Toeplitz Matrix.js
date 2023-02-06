/*
Description

Given anm x nmatrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements


Input
Input Format
The first line contains an integer t - the number of testcases.

The first line of each testcase contains two integers n and m - the size of the matrix.

The n lines that follow each contain m integers.

The ith (1 ≤ i ≤ n) line contain m integers, jth (1 ≤ j ≤ m) of which ismatrix[i][j].

Constraints
1 ≤ t ≤ 100

1 ≤ n,m ≤ 1000

1 ≤ matrix[i][j] ≤ 1000000


Output
Output Format
For each testcase printYESif it is Toeplitz matrix elseNO.


Sample Input 1 

2
2 2
1 2
2 1
3 4
1 2 3 4
5 1 2 3
9 5 1 2
Sample Output 1

YES
YES
Hint

First test case
The diagonal "[1, 2]" has different elements.

Second test case
In the above grid, the diagonals are:"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".In each diagonal all elements are the same, so the answer is True.
*/

function toeplitzMatrix(n,m,matrix){
    let flag = true;
    
    for(let i = 0; i< n-1;i++){
        for(let j = 0; j < matrix[i].length-1;j++){
            if(matrix[i][j] !== matrix[i+1][j+1]){
              flag = false;
              break;
            }
        }
    }
    
    if(flag) console.log("YES");
    else console.log("NO");
}