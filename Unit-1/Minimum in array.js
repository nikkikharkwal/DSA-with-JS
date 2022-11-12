/*
Description

You are given an array, stored in a variable with the sizearr

The size of the array is stored in a variable with the namen

You have to find the minimum number in the array

For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

Then, the required output will be1, as it is the smallest number in the array


Input
The first line of the input contains the value stored inN, the size of the array

The next line containsNspace separated numbers denoting the elements of the array


Output
Print the minimum element in the array, as explained in the problem statement


Sample Input 1 

5
1 2 3 4 5
Sample Output 1

1
Hint

Array elements are 1 2 3 4 5. Minimumelement in this array is 1.
*/

function minimumInArray(N,arr){
    //write code here
    let min = Infinity;
    for (let i = 0; i < N; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
            
        } 
        console.log(min)
    }