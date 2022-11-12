/*
Description

You are given a string S. Cut it into 2 equal halves and reverse it.

So, suppose if you have a string "abcxyz" then after performing the above mentioned operation it becomes "cbazyx"

If you have a string "abcdxyz", then after performing the above mentioned operation it becomes "cbadzyx"


Input
Input Format :

First line of input contains the string S

Constraints :

Length of S <= 1000


Output
Print the string with the required changes


Sample Input 1 

abcxyz
Sample Output 1

cbazyx
*/

function stringCut(S){
    //write code here
    let sum1 = "";
    let z = Math.floor(S.length/2)
  
        
    for(let i=z-1; i>=0 ; i--){
        sum1 += S[i];
    }
    let sum2 = "";
    let sum3 = S[z];
    if(S.length%2==1){
        z++;
    }
    for(let j = S.length-1; j >= z; j--){
        sum2 += S[j];
    }
   if(S.length%2==1){
       
   console.log(sum1 + sum3 +sum2);
   }
   else{
       console.log(sum1 + sum2)
   }
    }