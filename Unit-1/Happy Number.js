/*
Description

A happy number is a number defined by the following process: Starting with any positive integer, replace the number with the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Returntrueifnis a happy number, andfalseif not.


Input
1<=T<=1000

next t lines consist of an integer N

1<=N<=1e9


Output
true if it is happy else false

description for 19,

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Sample Input 1 

3
19
2
312082396
Sample Output 1

true
false
true
*/

function happy(n) {
    // Write code here
    let x = function(n) {
    if(n<10){
        if(n === 1 || n === 7){
            return true
        }
        return false
    }
    let total = 0
    while(n>0){
        let sq = n % 10
        total += sq**2
        n -= sq
        n /= 10
    }
    if(total === 1){
        return true
    }
    return x(total)
};
console.log(x(n))
}