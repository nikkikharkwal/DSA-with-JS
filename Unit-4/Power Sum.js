/*
Description

Find the number of ways that a given integer, X, can be expressed as the sum of the Nth powers of unique, natural numbers.


Input
Input Format

The first and only line contains the number X and N

Constraints

1<=X<=1000

1<=N<=10


Output
Print the number of ways.


Sample Input 1 

10 2
Sample Output 1

1
Hint

The answer will (1^2 + 3^2)
*/

function powerSum(n,m){
    let count = 0;
    
    function noOfWays(x,y,n,m){

        let sum = 0;
        for(let i = 0;i < x.length;i++){
            sum += x[i];
        }
        if(sum == n){
            count++;
            return;
        }
        if(sum > n){
            return;
        }
        else {
            for(let j = y;j <1000; j++){
                x.push(j**m);
                noOfWays(x,j+1,n,m);
                x.pop();
            }
        }
    }
    noOfWays([],1,n,m);
    console.log(count);
}