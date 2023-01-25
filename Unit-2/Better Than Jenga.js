/*
Description

One day you saw two friends Sachin and Ankush playing a new game which the call Jenga 2.0 and believe that it is better than Jenga.

  In this game , there are blocks of two colors Red and Blue.

  In one move a person can choose two adjacent blocks of different colors and remove them, and connect remaining blocks in the same order.
  If a person has no move to play he/she loses.

  If Ankush makes the first move.
  Output for each game who the winner will be if they both play optimally.

Input

First line consist of T number of test cases.
  The next N number of lines consist of the string of colors Red(R) and Blue(B).

  Output
  
Print the name of the winner for each game.

  Sample Input
  
3
BBRBRB
BBB
RB

Sample Output

Sachin
Sachin
Ankush

*/

function betterThanJenga(str) {
  let count = 0;
  let i = 0;
  while (i < str.length - 1) {
    if (str[i] !== str[i + 1]) {
      count++;
      i += 2;
    }
    else {
      i++;
    }

  }

  console.log(count % 2 === 0 ? "Sachin" : "Ankush");
}
