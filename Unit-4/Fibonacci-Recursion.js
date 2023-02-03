/*
Description

In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

F (0) = 0 , F (1) = 1

and

F (n) = F (n − 1) + F (n − 2) ,

for n > 1.

Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n


Input
Input Format

First line of input contains n

Constraints

n<35


Output
Output Format

Output the n-th fibonacci number


Sample Input 1 

4
Sample Output 1

3
*/

function fibonacciRecursion(n){
    if(n == 1 || n == 0){
        return n;
    }
    else {
        return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
    }
}