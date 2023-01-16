/*
Description

There is a sequence that contains one 0, A={0}.Additionally, you are given a string of length N, S=s1​ s2​ …sN​ , consisting of L and R.

For each i=1,2,…,N in this order, the following will be done.

If si​ is L, insert i to the immediate left of i−1 in A.If si​ is R, insert i to the immediate right of i−1 in A.

Find the final contents of A.


Input
Input Format

The first line contains the length of string , N

The second line contains the string S

Constraints

1<=N<=10^6


Output
Print the final contents of A


Sample Input 1 

5
LRRLR
Sample Output 1

1 2 4 5 3 0
Hint

Initially, A=(0).

S1​ is L, which makes it A=(1,0).

S2​ is R, which makes it A=(1,2,0).

S3​ is R, which makes it A=(1,2,3,0).

S4​ is L, which makes it A=(1,2,4,3,0).

S5​ is R, which makes it A=(1,2,4,5,3,0).
  */

function leftRightInsertion(n,str){
    let L = [];
    let R = [];
    
    for(let i = 0;i < n;i++){
        if(str[i] === "L") L.push(i);
        else R.push(i);
    }
    
    let A = [...L,n,...R.reverse()];
    console.log(A.reverse().join(" "))
}