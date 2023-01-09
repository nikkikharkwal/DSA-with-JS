/*
Description

Givennnon-negative integers representing an elevation map where the width of each bar is 1, calculate how much rain water will be trapped after it rains.


Input
Input Format

First line contains T the number of test cases

Second line contains N the size of the array

Third line contains N space separated integers

Constraints

1 <= T <= 10

1 <= N <= 10e5

0 <= a[i] <= 1000


Output
Print a single integer, the amount of rain water trapped


Sample Input 1 

2
5
3 2 0 4 6
7
7 0 3 6 2 3 5
Sample Output 1

4
14
*/

function trappedWater(n,arr){
    let start = 0;
    let end = n-1;
    let maxWater = 0;
    let water = 0;
    while(start <= end){
        let minWater = arr[arr[start] < arr[end] ? start++ : end--];
        
        maxWater = Math.max(maxWater, minWater);
        water += maxWater - minWater;
    }
    
    console.log(water)
}