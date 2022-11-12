/*
Description

A critical point in an array is defined as either a local maxima or a local minima.

A element is a local maxima if the current element has a value strictly greater than the previous element and the next element.

A element is a local minima if the current element has a value strictly smaller than the previous element and the next element.

Note that a element can only be a local maxima/minima if there exists both a previous element and a next element.

Given an integer array of size N, you have to print minDistance and maxDistance, where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, minDistance = -1 and maxDistance = -1.


Input
Input Format

First-line contains T, no of test cases.

First-line of each test case contains an integer numbers n - the size of the array.

Second-line of each test case contains n integer numbers a1, a2, ... an — elements of the array.

Constraints

1 <= T <= 10

1 <= n <= 10^6

1 <= a[i] <= 10^5


Output
For each test case print the minDistance and maxDistance, in a new line.


Sample Input 1 

3
2
3 1
7
5 3 1 2 5 1 2
9
1 3 2 2 3 2 2 2 7
Sample Output 1

-1 -1
1 3
3 3 
Hint

For the first test case

There are no critical points in [3,1].

For the second test case

There are three critical points:

[5,3,1,2,5,1,2]: The third element is a local minima because 1 is less than 3 and 2.
[5,3,1,2,5,1,2]: The fifth element is a local maxima because 5 is greater than 2 and 1.
[5,3,1,2,5,1,2]: The sixth element is a local minima because 1 is less than 5 and 2.The minimum distance is between the fifth and the sixth element. minDistance = 6 - 5 = 1.The maximum distance is between the third and the sixth element. maxDistance = 6 - 3 = 3.
For the third test case

There are two critical points:

[1,3,2,2,3,2,2,2,7]: The second element is a local maxima because 3 is greater than 1 and 2.
[1,3,2,2,3,2,2,2,7]: The fifth element is a local maxima because 3 is greater than 2 and 2.Both the minimum and maximum distances are between the second and the fifth element.Thus, minDistance and maxDistance is 5 - 2 = 3.Note that the last element is not considered a local maxima because it does not have a next element.
  */

function minMax(n, arr) {
  //write code here
    let array = [];
    let minDistance = Infinity;
    let maxDistance = -Infinity;
    
    for(let i =0; i <n;i++){
            if((arr[i]>arr[i-1]) && (arr[i]>arr[i+1])){
                array.push(i+1);
            }
            else if ((arr[i]<arr[i-1]) && (arr[i]<arr[i+1])){
                array.push(i+1);
            }
        }
    if(array.length>=2) {
        maxDistance = Math.abs(array[array.length-1] - array[0]);

        for(let z = 0; z<array.length;z++){
            if(Math.abs(array[z+1]-array[z]) < minDistance){
                minDistance = Math.abs(array[z+1]-array[z]);
            }
        }
    console.log(minDistance,maxDistance)
    }
    else{
        console.log(-1,-1)
    }
}