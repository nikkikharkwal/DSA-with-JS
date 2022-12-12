/*

Description

Consider the following version of Bubble Sort:

    for (int i = 0; i < n; i++) {   
        for (int j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
            }
        }
    }
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

Array is sorted in numSwaps swaps, wherenumSwapsis the number of swaps that took place.

First Element: firstElement, wherefirstElementis the first element in the sorted array.

Last Element: lastElement, wherelastElementis the last element in the sorted array.


Input
Input Format
The first line contains an integer,n, the size of the arraya.

The second line containsnspace-separated integersai.

Constraints
2 <= n <= 600

1 <= a[i] <= 2*10^6


Output
Output Format
Print the three lines required


Sample Input 1 

3
3 2 1
Sample Output 1

Array is sorted in 3 swaps
First Element: 1
Last Element: 3


*/

function bubbleSort(n,arr) {
    let temp;
    let count = 0;
    for(let i = 0;i<n;i++){
        isSwap = 0;
        for(let j = 0;j<n-1;j++){
            if(arr[j] > arr[j+1]){
                count++;
                isSwap = 1;
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
        if(isSwap == 0){
            break;
        }
    }
    console.log("Array is sorted in " +  count + " swaps")
    console.log("First Element: " + arr[0])
    console.log("Last Element: " + arr[arr.length-1])
}