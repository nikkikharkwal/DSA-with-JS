/*
Description

You are given two strings, string a and string b, you have to check whether string a is a subsequence of string b or not. If yes then print YES else print NO.


Input
Input Format

The first line contains integer numbers N and M - the length of the string a and length of string b.

The second line contains the string a.

The third line contains the string b.

Constraints

1 <= N <= M <= 10^5


Output
If the given condition is true print YES else print NO.


Sample Input 1 

4 6
abcd
aebcrd
Sample Output 1

YES
Sample Input 2 

5 7
aaacc
abaccac
Sample Output 2

NO
Hint

For the first sample,

string a = abcd
string b = aebcrd

See a, b, c, and d all characters appear in the string b in the same order as given in string a.

For the second sample,

string a = aaacc
string b = abaccac

See going in order of characters coming in string a we can see that we can only found aaac as subsequence in b.

  */

function subsequenceCheck(n,m,a,b) {
    let count = 0;
    let index = 0;
    for(let i =0;i<n;i++){
        for(let j = index;j<m;j++){
            if(a[i]==b[j]){
                count++;
                index = j+1;
                break;
            }
        }
    }
    if(count==n){
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}