/*
Description

Nick and Jack are good friends and both are very good at numbers, they want to play a fun game to know their understanding of numbers conversion into roman numerals. Nick will give a number N and Jack has to guess the equivalent Roman Numeral.

Jack can refer to the following table :


Input
Input Format

Input consists of single integer N

Constraints

1 <= N <= 3999


Output
Print equivalent roman number in a single line.


Sample Input 1 

2085
Sample Output 1

MMLXXXV
*/

function romanInRome(num) {
    let temp = "";
    
    while(num!==0) {
        if(num >= 1 && num < 4){
            temp += "I";
            num -= 1;
        }
        else if (num >= 4 && num<5) {
            temp += "IV"
            num -= 4;
        }
        else if (num >= 5 && num<9) {
            temp += "V"
            num -= 5;
        }
        else if (num >= 9 && num<10) {
            temp += "IX"
            num -= 9;
        }
        else if (num >= 10 && num<40) {
            temp += "X"
            num -= 10;
        }
        else if (num >= 40 && num<50) {
            temp += "XL"
            num -= 40;
        }
        else if (num >= 50 && num<90) {
            temp += "L"
            num -= 50;
        }
        else if (num >= 90 && num<100) {
            temp += "XC"
            num -= 90;
        }
        else if (num >= 100 && num<400) {
            temp += "C"
            num -= 100;
        }
        else if (num >= 400 && num<500) {
            temp += "CD"
            num -= 400;
        }
        else if (num >= 500 && num<900) {
            temp += "D"
            num -= 500;
        }
        else if (num >= 900 && num<1000) {
            temp += "CM"
            num -= 900;
        }
        else if (num >= 1000) {
            temp += "M"
            num -= 1000;
        }
        
    }
    console.log(temp)
}