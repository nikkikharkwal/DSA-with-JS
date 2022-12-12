/*
Description

You are given a sorted arrayAof sizeN, and another integerK
You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
If such a pair exists, printYes, else printNo

Input
The first line of the input containsT, the number of test cases.

The first line of each test case contains N and K, the size of the array and the value of K.

The next line contains N space separated integers denoting the elements of the array

Constraints

1 <=T<= 10

1 <=N<= 1000000

-10^9 <=A[i]<= 10^9

0 <= K <= 10^9


Output
For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


Sample Input 1 

2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 
Sample Output 1

Yes
No
Hint

In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.

  */

function differencePair(n,k,arr) {
    function check(n,k,arr){
    let l = 0;
    let r = 1;
    while(l<n && r<n){
        if(l!=r && (arr[r]-arr[l])==k) return true;
        else if((arr[r]-arr[l]) < k) r++;
        else l++;
    }
    return false;
    }
    
    if(check(n,k,arr)){
        console.log("Yes")
    }
    else {
        console.log("No")
    }
}