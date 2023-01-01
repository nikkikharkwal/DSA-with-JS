/*
Description

Given a string S and a number K, find the number of substrings of length K such that each character in the substring is present only once.

Note : The string contains special characters, capital letters, small letters

Input
Input Format

The first line contains the number of testcases T

For each testcase:

The first line contains a string S

The second line contains the number K

Constraints

1<=T<=10

1<=length of S<=10^4

1<=K<=10^4


Output
For each testcase print the number of substrings of length K such that there are no repetitions in the subtring


Sample Input 1 

1
idwmdggom
2
Sample Output 1

7
Hint

The valid substrings are : id dw wm md dg go om
*/

function nonRepetitiveSubstrings(str,k) {
    let count = 0;
    for(let i =0;i<=str.length-k;i++){
        let temp =""
        for(let j = i;j<i+k;j++){
            temp += str[j]
        }
            let obj = {};
            for(let z = 0;z<temp.length;z++){
                if(obj[temp[z]] == undefined ){
                    obj[temp[z]] = 1;
                }
                else {
                    obj[temp[z]]++;
                }
            }
            if (Object.keys(obj).length == k) count++;
    }
    console.log(count)
}