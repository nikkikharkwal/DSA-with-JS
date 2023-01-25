/*
Description

Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.


Input
input Format

Input contains integer N that is number of steps

Constraints

N <= 30


Output
Output Format

Output for each integer N the no of possible ways w.


Sample Input 1 

4
Sample Output 1

7
Hint

No of the ways for n=4 are:-

1 1 1 1

1 1 2

2 1 1

1 2 1

1 3

3 1

2 2
*/

function numberOfWays(n){
    if(n === 0){
        return 1;
    }
    if(n < 0){
        return 0;
    }
    if(n > 0){
        return numberOfWays(n - 1) + numberOfWays(n - 2) + numberOfWays(n - 3);
    }
}