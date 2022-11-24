/*
Description

Given a matrix of size n by n. Traverse and print the matrix in spiral form.



Input
Input Format

First-line contains n

The next n lines contain the matrix

Constraints

n <= 1000

Ai <= 10000




Output
Print the matrix in a single line traversing it spirally


Sample Input 1 

4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
Sample Output 1

1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 
*/

function spirallyTraversingAMatrix(N, matrix){
    //write code here
    let left = 0,right=N-1,top=0,bottom=N-1;
    let res = ""
    
    while(left<right && top<bottom){
        for(let i = left;i<=right;i++){
            res += matrix[top][i] + " "
        }
        top++;
        for(let i = top;i<=bottom;i++){
            res += matrix[i][right] + " "
        }
        right--;
        
        for(let i = right;i>=left;i--){
            res += matrix[bottom][i] + " "
        }
        bottom--;
        for(let i = bottom;i>=top;i--){
            res += matrix[i][left] + " "
        }
        left++;
    }
  console.log(res)
}