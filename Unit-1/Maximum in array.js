/*
Description

You are given an array, stored in a variable with the sizearr

The size of the array is stored in a variable with the namen

You have to find the maximum number in the array

For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

Then, the required output will be5, as it is the largest number in the array


Input
The first line of the input contains the value stored inN, the size of the array

The next line containsNspace separated numbers denoting the elements of the array


Output
Print the maximum element in the array as shown in the problem statement


Sample Input 1 

5
1 2 3 4 5
Sample Output 1

5
Hint

Array elements are 1 2 3 4 5. Maximum element in these array is 5.
*/
function maximumInArray(N,arr){
    //write code here
     let max = -Infinity;
    for (let i = 0; i < N; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
            
        } 
        console.log(max)
}