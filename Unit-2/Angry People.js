/*
Description

You have a circular dining table and N angry people.You need to place them on the table.Each person has a anger value.

You can place them in any order on the circular table.Once you place them you need to calculate the Danger value of your arrangement.

The danger value of the arrangement is the maximum difference of anger values of all the adjacent seated persons.You need to keep this danger value as low as possible.


Input
Input Format

The first line contains N.

The second line contains the anger values of N persons.

Constraints

3<=N<=1000

1<=Hunger Value<=1000




Output
Output format

Print the minimum possible danger value.


Sample Input 1 

4
5 10 6 8
Sample Output 1

4
Hint

The optimal arrangement is :

5

/             \

6                  8

\           /

10

The adjacent pair values are 1 for(6-5),3 for(8-5),4 for(10-6),2 for(10-8).Since danger value is the maximum value so it's 4.

*/

function angryPeople(n,arr) {
    function check(n,arr){
        
    arr.sort((a,b) => {return a-b});
    let flag = false;
    if(n%2==0){
        flag = true;
        n = n-1;
    }
    let danger = 0;
    let l = arr[0], r = arr[0];
    
    for(let i =1;i<n;i+=2){
        left = arr[i] - l;
        right = arr[i+1] - r;
        l = arr[i]
        r = arr[i+1]
        danger = Math.max(danger,left,right);
    }
    if(flag){
        right = arr[n]-r;
        r = arr[n];
        danger = Math.max(danger,right)
    }
    return Math.max(danger,r-l);
    }
    
    console.log (check(n,arr))
}