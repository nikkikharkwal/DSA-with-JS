/*
Description

Given a square matrix of size N x N. Print the Z traversal of the matrix.


Input
The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

Next N lines contains N space separated integers, denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000


Output
For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

1 2 3 5 7 8 9 
*/

function zTraversal(N,arr){
    let res = "";
    
    for(let i = 0;i<N;i++){
        res += arr[0][i] + " "
    }
    let i = 1,j=N-2;
    while(i<N && j>=0){
        res += arr[i][j] + " "
        i++;
        j--;
    }
    for(let i = 1;i<N;i++){
        res += arr[N-1][i] + " "
    }
    
    console.log(res)
}