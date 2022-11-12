/*
Description

You are given a number, stored in a variable with the namenum. Find out the average of sum of all prime numbers in the range of [1,num], including the value stored innum


Input
The first and the only line of the input contains the value stored innum


Output
Print thefloor value of average of sumof all prime numbers in the range of[1,num], includingnumitself


Sample Input 1 

13
Sample Output 1

6
Hint

In the sample test case, the value stored innum = 13. Therefore, all the prime numbers, in the range of[1,num]are

2
3
5
7
11
13

Therefore, the sum of prime numbers becomes,2 + 3 + 5 + 7 + 11 + 13 = 41, number of prime numbers are 6.

Therefore, the average becomes41 / 6 = 6.83, flooring the value to6, which is the required answer.
  */

function averagesOfPrime(num){
	//Enter Code Here
	let sum = 0;
	let flag = 0;
	for(let i =1;i<=num;i++){
	    if(prime(i)==true){
	        sum += i
	        flag++;
	    }
	}
	console.log(Math.floor(sum/flag))

}
function prime(n){
    let count = 0;
	for(let i =1;i<=n;i++){
	    if(n%i==0){
	        count++;
	    }
	}
	if(count==2){
	    return true;
	}
}