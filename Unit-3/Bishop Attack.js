/*
Description

Ankush gifted his favorite student Akshay a chessboard to practice his chess skills. This chessboard is a grid a with n rows and m columns with each cell having a non-negative integer written on it.

Akshay's challenge is to place a bishop on the board such that the sum of all cells attacked by the bishop is maximal. The bishop attacks in all directions diagonally, and there is no limit to the distance which the bishop can attack.

Note that the cell on which the bishop is placed is also considered attacked.

Help him find the maximal sum he can get.


Input
Input Format

The first line contains the number of testcases, T

For each testcase:

The first line contains the number of rows and columns , n and m

The next n lines contains m integers each representing the value of chess[i][j]

Constraints

1<=T<=10

1<=n,m<=200

1<=chess[i][j]<=1000


Output
For each test case output a single integer, the maximum sum over all possible placements of the bishop.


Sample Input 1 

4
4 4
1 2 2 1
2 4 2 4
2 2 3 1
2 4 2 4
2 1
1
0
3 3
1 1 1
1 1 1
1 1 1
3 3
0 1 1
1 0 1
1 1 0
*/

function bishopAttack(n,m,mat) {
    let maximumSum = -Infinity;
    for(let i =0;i<n;i++){
        for(let j= 0;j<m;j++){
          maximumSum = Math.max(checkSum(i,j,mat,n,m), maximumSum) 
        }
    }
    console.log(maximumSum)
}

function checkSum(i,j,mat,n,m){
    let sum = 0;
    let row = i;
    let col = j;
    while(row < n && col>=0){
        sum += mat[row][col]
        row++;
        col--;
    }
    
    row = i-1;
    col = j+1;
    while(row >=0 && col < m) {
        sum += mat[row][col]
        row--;
        col++;
    }
    
    row = i+1;
    col = j+1;
    while(row < n && col < m) {
        sum += mat[row][col]
        row++;
        col++;
    }
    
    row = i-1;
    col = j-1;
    while(row >=0 && col >=0) {
        sum += mat[row][col]
        row--;
        col--;
    }
    return sum;
}