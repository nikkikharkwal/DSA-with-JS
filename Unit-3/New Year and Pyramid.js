/*
Description

You have decided to build a pyramid of stones on this new year. The simple rule is that the top level of the pyramid must consist of 1 stone, the second level must consist of 1 + 2 = 3 stones, the third level must have 1 + 2 + 3 = 6 stones, and so on.

Effectively, the i-th level of the pyramid contains 1 + 2 + ... + (i - 1) + i stones.

You have got n stones and have to build a pyramid from them.

Team Masai wants to know what is the maximum height of the pyramid that you can make using the given stones.


Input
Input Format

The first line contains integer n.

Constraints

n <= 10000


Output
Print the maximum possible height of the pyramid.


Sample Input 1 

25
Sample Output 1

4
*/
function newYearPyramid(num){
    let flag = 0;
    let start = 1;
    let sum = 0;
    while(num >= 0){
        sum += start;
        start++;
        num -= sum;
        flag++;
    }
    console.log(flag-1);
}