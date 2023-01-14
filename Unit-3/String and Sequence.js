/*
Description

Given a string S and a sequence P, replace multiple occurrences of a sequence by character ‘X’. The conversion should be in-place and solution should replace multiple consecutive (and non-overlapping) occurrences of a sequence by a single ‘X’.


Input
Input Format

First-line contains strings S

Second-line contains the sequence P.

Constraints

1 <= length S, P <=  100


Output
Print the result string after replacing the sequences by X


Sample Input 1 

aaaaa
aa
Sample Output 1

Xa
Hint

Sample 1 Explanation

S = aaaaa

P = aa

here 'aa' appeared twice and  consecutively hence replaced by single "X"

output = Xa

*/

function stringSequence(s,p) {
    console.log(replacePattern(s,p))
}

    function check(s, p) {
    for (let i = 0; i<p.length; i++)
        if (s[i] != p[i])
            return false;
    return true;
}

function replacePattern(str,pattern)
{

    if (pattern == "")
        return;
 
    let len = pattern.length;
    if (len == 0)
        return;
 
    let i = 0, j = 0;
    let count;
 

    while (j<str.length) {
 
        count = 0;
 

        while (check(str.substring(j,j+len), pattern)) {

            j = j + len;
            count++;
        }

        if (count > 0){
            str = str.substring(0,i) + 'X' + str.substring(i+1,)
            i++
        }

        if (j<str.length){
            str = str.substring(0,i) + str[j] + str.substring(i+1,)
            i++;j++
        }
    }
    str = str.substring(0,i);
    return str;
}