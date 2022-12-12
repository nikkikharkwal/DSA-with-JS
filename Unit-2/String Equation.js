/*
Description

You are given a string stored in a variable with the namestr, containing a mix of upper case and lower case English characters

The length of the string is stored in stored in a variable with the nameN

You have to solve the equation5*x + 3*y, wherexis the number of small case English characters in the string,

whileyis the number of upper case English characters in the string

For example, consider the value stored inN = 5, andstr = AmanZ

The number of upper case characters in the string is 2 -A, Z, and the number of small case characters in the string is 3 -m,a,n

Therefore, the value of the equation5*x + 3*y, becomes5*3 + 3*2 = 21, which is the required answer


Input
The first line of the input contains the value stored inN

The second line of the input contains the value stored instr


Output
Solve the equation given in the problem statement, as explained

Sample Input 1 

5
AmanZ
Sample Output 1

21
Hint

In the sample test case, the value stored inN = 5, andstr = AmanZ

The number of upper case characters in the string is 2 -A, Z, and the number of small case characters in the string is 3 -m,a,n

Therefore, the value of the equation5*x + 3*y, becomes5*3 + 3*2 = 21, which is the required answer
*/

function StringEquation(N, str) {
  //write code here
  let uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lC = "abcdefghijklmnopqrstuvwxyz"
  let countUc = 0, countLc = 0;
  
  for(let i = 0;i<N;i++){
      for(let j = 0;j<26;j++){
          if(str[i]==uC[j]){
              countUc++;
          }
         else if(str[i]==lC[j]){
              countLc++;
          }
      }
  }
  console.log(3*countUc+ 5* countLc)
}