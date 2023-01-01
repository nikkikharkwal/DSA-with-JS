/*
Description

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.


Input
Input Format
The first line contains an integer n, the number of socks represented in ar.

The second line contains n space-separated integers, arr[i], the colors of the socks in the pile.

Constraints
1 <= n <= 100

1 <= ar[i] <= 100where0 <= i < n


Output
Output Format
Print how many pairs of socks with matching colors there are.


Sample Input 1 

9
10 20 20 10 10 30 50 10 20
Sample Output 1

3
*/

function salesByMatch(n,arr) {
    arr.sort()
    let i = 0;
    let j = 1;
    let flag = 0;
    while(i<n-1 & j<n){
        if(arr[i]==arr[j]){
            i += 2;
            j += 2;
            flag++;
        }
        else {
            i++;
            j++;
        }
    }
    
    console.log(flag);
    
}