/*
Description

You are given an array A of N integers.

Your task is to find the maximum number of times an odd number is continuously repeated in the array.


Input
Input Format

First line contains N which is the number of element present in the array.

Second line contains N integers which are the values of array.

Constraints

1 <= N <= 100


Output
Output Format

Output one integer which the maximum number of times an odd number is repeated in array.


Sample Input 1 

12
1 1 1 1 2 2 2 2 2 1 1 1
Sample Output 1

4
Hint

Sample 1 Explanation

1 is repeated 4 times from index 0 to index 3 =>4times

2 is repeated 5 times from index 4 to index 8 =>5times

1 is repeated 3 times from index 9 to index 11 =>3times

Odd number in array are 1.

1 occurs4times and3times continuously, so4is maximumnumber of times an odd number is continuously repeated in this array.
  */

function longestRepeatedOdd(N, array) {
    //write code here //1 2 2 3 3 3 4 4 4 4 5 5 5 5 5 7 9 0
    let max = 0;
    for(let i = 0; i<N; i++){
        if(array[i]%2==1){
            let count = 0;
            for(let j = i; j < N; j++){
                if(array[i]==array[j]){
                    count++;
                }
                else{
                    break;
                }
            }
            if(count> max ){
                max = count;
            }
        }
    }
    console.log(max);
}