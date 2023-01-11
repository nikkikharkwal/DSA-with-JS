/*
Description

There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.(by random, it means that any order of number: not sorted) There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)

Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample test case.

If it is possible to achieve using the side land, print "yes"

else print "no"


Input
Input Format :

There are several test cases.

The first line of each test case contains a single number n, the number of trucks.

The second line contains the numbers 1 to n in an arbitrary order.

All the numbers are separated by single spaces. These numbers indicate the order in which the trucks arrive in the approach street.

Input ends with number 0

Constraints :

N < 1000


Output
For each test case your program has to output a line containing a single word "yes" if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.


Sample Input 1 

5
5 1 2 4 3 
0
Sample Output 1

yes
*/

function useSideLane(n,arr) {
    let stack = [];
    let expected = 1;
    let flag = true;
    
    for(let i = 0; i< n; i++){
        if(arr[i] === expected){
            expected++;
            continue;
        }
        else if(stack.length !== 0 && expected === stack[stack.length-1]){
            
            while(stack.length !== 0 && expected === stack[stack.length-1]) {
                stack.pop();
                expected++;
            }
        }
        
        if(stack.length !== 0 && stack[stack.length-1] < arr[i]){
            flag = false;
        }
        
         stack.push(arr[i]);
    }
    
    if(flag) console.log("yes");
    else console.log("no");
}