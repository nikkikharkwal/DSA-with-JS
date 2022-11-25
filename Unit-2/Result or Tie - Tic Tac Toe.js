/*
Description

You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.

Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.

If the winner is 'o', printo.

In case the match ended in a tie, printTie.


Input
InputFormat

The input contains 3 lines where each line has 3 space separated characters which represent the final status of tic tac toe

Constraints

The input contains either of the 2 alphabets: 'x' and 'o'


Output
Print Tie/x/o depending on the end result of the game.


Sample Input 1 

x o x
o x x
o o o
Sample Output 1

o`
Hint

owins as per tic tac toe.
*/
function ticTacToe(matrix){
    //write code here
    let flag = 0;
    let top = 0,bottom = matrix.length-1,left=0
    while (top<=bottom && left<=bottom){
        let count = 0;
        for(let i = 0;i<=bottom;i++){
            if(matrix[top][i]==matrix[top][0]){
                count++;
            }
        }
        if(count==3){
            console.log(matrix[top][0])
            break;
        }
        top++;
        count=0;
        for(let i = 0;i<=bottom;i++){
            if(matrix[i][left]==matrix[0][left]){
                count++
            }
        }
        if(count==3){
            console.log(matrix[0][left])
            break;
        }
        left++;
        count= 0;
        for(let i = 0;i<=bottom;i++){
            if(matrix[i][i]==matrix[0][0]){
                count++
            }
        }
        if(count==3){
            console.log(matrix[0][0]);
            break;
        }
        
        count=0;
        for(let i = 0;i<=bottom;i++){
            if(matrix[i][bottom-i]==matrix[0][bottom]){
                count++
            }
        }
        if(count==3){
            console.log(matrix[0][bottom])
            break;
        }
    }
  
}