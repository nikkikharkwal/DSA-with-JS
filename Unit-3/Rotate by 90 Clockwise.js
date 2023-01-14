/*
Description

Given a square matrix of size N x N. Rotate the matrix by 90 degrees in clockwise direction. Refer the sample I/O for better understanding.


Input
The first line of the input contains T, the number of test cases.

The next line contains N, the size of the square matrix.

The next line N line contains N space separated integers, denoting the elements of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 50

1 <= A[i][j] <= 100


Output
For each matrix, given in the test case, rotate the matrix by 90 degrees in clockwise direction.


Sample Input 1 

2
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
3
1 2 3
4 5 6
7 8 9
Sample Output 1

5 1 5 1 
6 2 6 2 
7 3 7 3 
8 4 8 4 
7 4 1 
8 5 2 
9 6 3 
Hint

In the given sample test case, in the first sample test case the value of N = 4, and the array after rotating 90 degrees clockwise, becomes as shown in the output. Similarly, for the second test case N = 3, and the matrix after rotation becomes

7 4 1
8 5 2
9 6 3

as shown in the sample output.
  */

function rotateBy90Clockwise(N, matrix){
    //write code here

    let start = 0;
    while(start < N){
        let temp = "";
        for(let i = N-1;i>= 0;i--){
            temp += matrix[i][start] + " "
       }
            console.log(temp) 
       start++;
    }
    
}