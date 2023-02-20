/*
Description 

You are working for Masai Airline. There are **n** passengers with 2 bags each (one check-in and other hand bag). The limitation for check-in bag is 15kgs and that for hand bag is 7kgs. You are given 2 arrays: First array contains weight of check-in bag of ith passenger. Similarly, second array contains weights of hand bag of ith passenger. Print "Boarding" (without quotes) if the passenger clears both luggage weight limits of Masai Airline, else print "Stop" (without quotes).

Please note that 15 kgs and 7 kgs are inclusive.

Input

<p>First line contains **n** (number of passengers)</p>
Second line contains **n** positive integers which are the weights of check-in bag of ith passenger.
Third line contains **n** positive integers which are the weights of hand bag of ith passenger.

<b>Constraints :</b>

n&lt;1000

Output 

Output "Boarding" (without quotes) or "Stop" (without quotes) of the passenger meets criteria of Masai Airlines.

Sample Input 1
4
12 14 15 6
8 5 7 4

Sample Output 1
Stop 
Boarding
Boarding
Boarding

Hint
Since, the hand bag of first person is 8kgs (greater than 7kgs), therefore stopped.
*/

function airline(n,checkinBag,handBag){
    let i = 0;
    while(i < n){

        if(checkinBag[i] > 15 || handBag[i] > 7){
            console.log("Stop");
        }
        else {
            console.log("Boarding");
        }
        
        i++;
    }
}