/*
Description

You are given a string, You have to print the first non-repeating character of the string if exists, else print "Not Found".

In the given sample input

S = "racecars"

r, a and c appear 2 times, e and s appear 1 time.

and e is the first non-repeating character.


Input
Input Format

The single line consists of string S.

Constraints

1<=Length of S <= 50


Output
Print first non-repeating character of string S.


Sample Input 1 

racecars
Sample Output 1

e

*/
function firstUniqueChar(S){
    //write code here
    let obj = {};
    for(let i = 0; i <S.length;i++){
        let key = S[i];
        if(obj[S[i]]==undefined){
            obj[S[i]] = 1;
        }
        else {
            obj[S[i]]++;
        }
    }
    let bag = "";
    for(let key in obj){
        if(obj[key]==1){
            bag += key;
            break;
        }
    }
    if(bag == ""){
        console.log("Not Found");
    }
    else {
        console.log(bag)
    }
}