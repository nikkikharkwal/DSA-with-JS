/*
Description

You have some apples and a basket that can carry up to W units of weight.

Given an integer array weight of size N where weight[i] is the weight of the ith apple, return the maximum number of apples you can put in the basket.


Input
Input Format

The first line contains the number of apples N and the weight that the basket can carry W

The second line contains N integers as weight of the apples.

Constraints

1<=N<=10^6

1<=W<=10^9

1<=weight[i]<=1000


Output
Print the number of apples that the basket can carry


Sample Input 1 

4 20
3 10 4 4 
Sample Output 1

3
Hint

It is only possible to choose 3 apples as taking 4 would sum up to 21 and that is more weight than the basket can hold.

  */

function maximumApples(n,w,arr) {
    let flag = 0;
    arr.sort((a,b) => {return a-b})
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
            sum += arr[i];
        if(sum < w){
            flag++;
        }
    }
    console.log(flag)
}