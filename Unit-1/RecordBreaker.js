/*
Description

Akhil plays regional volleyball and wants to become a pro. Each season he maintains a record of his play. He tabulates the number of times he breaks his season record for most points and least points in a game. Points scored in the first game establish his record for the season, and he begin counting from there.

Given the scores for a season, determine the number of times Akhil breaks his records for most and least points scored during the season.


Input
Input Format

First-line contains T, no of test cases.

First-line of the each test case contains an integer numbers n - the number of season.

Second-line of the each test case contains n integer numbers a1, a2, ... an — the score of each season.

Constraints

1 <= T <= 10

1 <= n <= 10^3

1 <= a[i] <= 10^8


Output
For each test case, output the two integers first is for breaking most point records, second is for breaking least point records.


Sample Input 1 

2
9
10 5 20 20 4 5 2 25 1
10
3 4 21 36 10 28 35 5 24 42
Sample Output 1

2 4
4 0

*/
function recordBreaker(n, a) {
  //write code here
  let max = a[0];
  let min = a[0];
  let best = 0;
  let worst = 0;
  let x = a.forEach((n) => {
      if(n>max){
          max = n;
          best++;
      }
      if(n<min){
          min = n;
          worst++;
      }
  })
   console.log(best,worst) 
}