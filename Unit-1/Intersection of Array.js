/*
Description

You are given 2 arraysarr1andarr2ofNintegers.

Your task is to write a program that finds the one integer which is common in both arrays (arr1andarr2).

Note: There is always one integer common in both arrays.


Input
Input Format

First line of input containsN, size of arrays.

Second line containsNspace separated integers making the first array (arr1)

Third line containsNspace separated integers making the second array (arr2)

Constraints

1 <= N <= 1000


Output
Output Format

Output that one integer which is common in both arrays


Sample Input 1 

3
4 5 7
9 2 5
Sample Output 1

5
Hint

arr1 is 4 5 7.

arr2 is 9 2 5.

5 is common in both array, so we print 5.
*/
function intersectionOfArray(N, arr1, arr2){
    //write code here
        let sum = "";
    for(let i = 0 ; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i]==arr2[j] ){
                sum += arr1[i] + " ";
            }
        }
    }
    console.log(sum);
}