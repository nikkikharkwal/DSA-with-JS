/*
Description

You are given a string, remove all the duplicates and print the unique string.


Input
Input Format

The single line consists of string S.

Constraints

1<=Length of S <= 50


Output
Print string with no duplicate characters.


Sample Input 1 

aaaabbbbbcccccdddd
Sample Output 1

abcd
Sample Input 2 

a transformation in education
Sample Output 2

atrnsfomieduc
Hint

Sample 1 Explanation

S ="aaaabbbbbcccccdddd"

here a, b, c and d present multiple times if more than one such occurrence is removed we will get a string with unique characters as"abcd"

Sample 2 Explanation

S=  "a transformation in education"

here a, t, i, o, n, r present multiple times if more than one such occurrence is removed we will get a string with unique characters as"atrnsfomieduc"
*/

function makeItUnique(S){
    //write code here
    let obj = {};
    for(let i =0;i<S.length;i++){
        if(obj[S[i]]==undefined){
            obj[S[i]] = 1;
        }
    }

    let bag = ""
    for(let i in obj){
        if(" "==i){
            continue;
        }
        else {
            
        bag += i;
        }
    }
    console.log(bag)
}