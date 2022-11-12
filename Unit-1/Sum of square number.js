/*
Description

Given a non-negative integerk, decide whether there're two integersaandbsuch thata^2+ b^2= k.


Input
The first and the only line of the input contains the value stored inc

Output
Printtrueif there exists a k which can satisfy the givenequationa^2+ b^2= k,otherwise printfalse

Sample Input 1 

25
Sample Output 1

true
Sample Input 2 

7
Sample Output 2

false
Hint

In the first sample test case, the value stored inc = 25

for the values a = 3, b = 4 , the sum of square = a*a + b*b = 3*3 + 4*4 = 25 ,which is equal to c = 25

Thus the output is true.



In the second sample test case, the value stored inc = 7

there is no value of a and b exists, which will be equal to c = 7

Thus the output is false.
  */

function sumOfSquare(k) {
    // Write code here
    let count = false;
    for(let i = 1; i*i <=k ; i++){
        let j = Math.floor(Math.sqrt(k-i*i));
        if(i*i + j*j == k){
            count = true;
        }
    }
    console.log(count);
}