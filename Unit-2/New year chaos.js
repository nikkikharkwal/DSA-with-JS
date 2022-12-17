/*
Description

It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from1ton. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.


Input
Input Format
The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:

The first line contains an integer n, the number of people in the queue

The second line has n space-separated integers describing the final state of the queue.

Constraints
1 <= t <= 100

1 <= n <= 10^5


Output
Output Format
Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.


Sample Input 1 

2
5
2 1 5 3 4
5
2 5 1 3 4
Sample Output 1

3
Too chaotic
Hint

First testcase
1.PNG

Second testcase
No person can bribe more than two people, yet it appears person 5 has done so. It is not possible to achieve the input state.
*/


function newYearChaos(arr,n) {
    let bribe =  0;
    for(let i =0;i<n;i++){
        let position = arr[i]
        before = i+1;
        if(position-before > 2){
            return "Too chaotic"
        }
        let max = Math.max(0,position-2)
        for(let j=max;j<i;j++){
            if(arr[j]>position){
                bribe++;
            }
        }
    }
    return bribe;
}