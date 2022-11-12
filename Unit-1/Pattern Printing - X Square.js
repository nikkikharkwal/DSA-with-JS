/*
Description

You are given an integerN.

Print the pattern as shown below.

If the value stored inN = 7, then the pattern required will be

* * * * * * * 
* *       * * 
*   *   *   * 
*     *     * 
*   *   *   * 
* *       * * 
* * * * * * * 


Input
The first and only line contains the value of N


Output
Print the pattern as shown in the problem statement


Sample Input 1 

7
Sample Output 1

* * * * * * *
* *       * *
*   *   *   *
*     *     *
*   *   *   *
* *       * *
* * * * * * *
Sample Input 2 

3
Sample Output 2

* * *
* * *
* * *
Hint

Print the pattern as shown in the sample output.

Hint: The dimension of the Square isN x N
*/

function patternPrinting(N) {
    // Write code here
     for(let i =1 ; i <=N; i++){
       let sum = "";
       for(let j = 1; j <= N; j++){
           if(i==1 || i==N || j==1 || j==N || i+j==N+1 || i*i==j*j){
               
           sum += "*" + " ";
           }
           else {
               sum += "  "
           }
       }
       console.log(sum)
   }
}