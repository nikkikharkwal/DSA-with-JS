/*
Description

It is the end of the unit, and to celebrate you decide to write a code to print the letterE, with the help of the character*

You are given a number stored in a variable with the nameN. You have to make the letterE, with reference to the value stored inN

For example, consider the value stored inN = 5, then the corresponding pattern will be

* * * * *
*
*****
*
* * * * *
Note : The value stored in N, will always be odd

Input
The first and the only line of the input contains the value stored inN

Output
Print the pattern as shown in the problem statement according to the value stored inN

Sample Input 1 

5
Sample Output 1

* * * * *
*
*****
*
* * * * *
Hint

In the sample test case, the value stored inN = 5, therefore, the required pattern will be
* * * * *
*
*****
*
* * * * *

In the following figure, the character_denotes the empty spaces required in the pattern.
*_*_*_*_*
*
*****
*
*_*_*_*_*

Please note, that the character_is given only for the purpose of understanding and to help you debug, and should not be included in the actual program
*/

function endOfUnit(N){
    //write code here
    let temp1 = "";
    let x = (N-5)/2
    for(let i = 1;i<=N;i++){
        temp1 += "*" + " "
    }
    console.log(temp1)
    for(let i = 0;i<=x;i++){
    console.log("*")
    }
    let temp2 = "";
    for(let i = 1;i<=N;i++){
        temp2 += "*"
    }
    console.log(temp2)
    for(let i = 0;i<=x;i++){
    console.log("*")
    }
    let temp3 = "";
    for(let i = 1;i<=N;i++){
        temp3 += "*" + " "
    }
    console.log(temp3)
}