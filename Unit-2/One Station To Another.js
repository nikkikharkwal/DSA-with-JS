/*
Description

You are given a listAof metro stations unique ID's(in the same order), and given a Source and Destination station ID. find out what will be the price of the ticket. The price of the ticket is calculated by multiplying 7 with the distance between the stations. Distance between two adjacent stations is 5 KMs.


Input
Input Format:-

The first line of input contains a single integerT, number of testcases - thenTtestcases follows.

The first line of each testcase contains a single integerN, number of stations.

The second line of each testcase containsNspace-separated integers,A[0], A[1], .., A[N-1]

The third line of each testcase contains two integersSandD, source and destination station IDs.

Constraints:-

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i], S, D <= 10^6

It is guaranteed that S and D are always valid station IDs.


Output
Output Format:-

PrintTlines,ithlines contains the ticket price ofithtestcase.


Sample Input 1 

3
4
47 63 41 40 
41 40
4
19 32 7 3 
19 7
3
67 2 18 
2 18
Sample Output 1

35
70
35
Hint

TestCase 1:-Distance between station40and41is 5 KM,Ticket Price - 5*7 = 35

TestCase 2:-Distance between station19and7is 10 KM.Ticket Price - 10*7 = 70

TestCase 3:-Distance between station2and18is 5 KM.Ticket Price -5*7 = 35
*/

function station1to2(N, A, S, D){
    // write code here
    let x = 0;
    let y = 0;
    for(let i = 0;i<N;i++){
        if(S==A[i]){
            x += i
        }
        if(D==A[i]){
            y += i
        }
    }
    let z = Math.abs(x - y)
    let ans = z*5*7
    console.log(ans)
}