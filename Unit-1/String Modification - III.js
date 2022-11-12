/*
Description

You are given a string, whose length is stored in a variable with the nameN

The string is stored in a variable with the namestr

It is given that the length of the string is always divisible by 3

You have to create a new modified string, such that individual parts of the original string of length 3, are reversed

For example, consider the given string isstr = abcdefghi, andN = 9. In this case, there are 3 parts of the string with length 3

The first part isabc, the second part isdef, and the third part isghi. Now, you have to reverse all the three parts, and combine them in the same order as before

Therefore, the first part after reversing iscba, second part after reversing isfed, and the third part after reversing isihg

Combining the three parts, the new modified string becomescbafedihg, which is the required answer


Input
The first line of the input contains the value stored inN

The second line of the input contains the value stored instr


Output
Print the modified string as shown in the problem statement

Sample Input 1 

9
abcdefghi
Sample Output 1

cbafedihg
Hint

In the sample test case, given string isstr = abcdefghi, andN = 9. In this case, there are 3 parts of the string with length 3

The first part is abc, the second part is def, and the third part is ghi. Now, you have to reverse all the three parts, and combine them in the same order as before

Therefore, the first part after reversing is cba, second part after reversing is fed, and the third part after reversing is ihg

Combining the three parts, the new modified string becomes cbafedihg, which is the required answer.
  */

function stringModification3(N,str) {
    //write code here
    let bag = "";
    let x = N/3;
    let a = 0;
    for(let i = 1;i<=x;i++){
        a++;
        a++;
        a++;
        for(let j = a-1;j>=a-3;j--){
            bag += str[j]
        }
    }
    console.log(bag)

}