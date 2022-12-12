/*
Description

Given a string, find the length of the smallest sub-string consisting of maximum distinct characters.

Also note that the output can have reprating characters.

Suppose string is aaabbbcdcd, but the substring "abbbcd" contains all the distinct characters present in the string (i.e. "a", "b", "c", "d")


Input
Input Format :

First line of input contains the string



Constraints :

Length of string < 500


Output
Print the number which is the length of the smallest sub-string consisting of maximum distinct characters


Sample Input 1 

zoomsessionmooz
Sample Output 1

10
*/

function minLengthSubstr(s){
//given string characters count
let allChar = {};
for(let i of s){
    if(allChar[i]==undefined) allChar[i]=1;
}
let OgLength = Object.keys(allChar).length;
// console.log(OgLength)

let min = Infinity;
let start = 0;
let end = 0;
let subStringObj = {};

while(end<s.length){
    //loop for counting substring characters
    while((Object.keys(subStringObj).length)!==OgLength){
        if(subStringObj[s[end]]==undefined){
            subStringObj[s[end]] = 1;
        }
        else {
            subStringObj[s[end]]++;
        }
        
        end++;
    }
    while((Object.keys(subStringObj).length)==OgLength){
    //for counting the min length
        if(min>(end-start)){
            min = end-start;
        }
        //deleting starting element
        if(subStringObj[s[start]] == 1){
            delete subStringObj[s[start]]
        }
        else {
            subStringObj[s[start]]--;
        }
        
        start++;
    }
    
    
}
    console.log(min)
}
