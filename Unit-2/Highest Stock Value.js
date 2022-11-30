/*
Description

Chunnu wants to become a trader. He wants your help to find the highest value of the stock in one day. The value of the stock changesntimes throughout the day. When the day started the value of the stock was 0.

You are given an integer arrayarrof lengthnwherearr[i]is the net change in the value of the stock between pointsi​​​​​​ andi + 1for all (0 <= i < n). Print the highest value of the stock during the day.

Note:Stock Prices can also be in Negative


Input
The first line denotes the number of changesn

The second line hasnspace-separated integers that denote thearrwhere each integer is the net change of value after each point

Constraints

2 <= arr.length <= 50
-100 <= arr[i] <= 100

Output
Print the highest value of the stock


Sample Input 1 

5
1 -3 4 3 -2
Sample Output 1

5
Sample Input 2 

4
-3 2 -2 -1
Sample Output 2

0
Hint

In sample1,n=5andarr=[1,-3,4,3,-2]

Day starts with value 0. Then it goes up by 1, new value 0+1=1. Then it goes down by 3, new value 1-3=-2. Then it goes up by 4, new value -2+4=2. Then it goes up by 3, new value 2+3=5. Then it goes down by 2, new value 5-2=3.
So the value of the stocks throughout the day will be[0,1,-2,2,5,3]
The Highest value of the stock is 5. Thus the output is5
In sample2,n=4andarr=[-3,2,-2,-1]

Day starts with value 0. Then it goes down by 3, new value 0-3=-3. Then it goes down up by 2, new value -3+2=-1. Then it goes down by 2, new value -1-2=-3. Then it goes down by 1, new value -3-1=-4.
So the value of the stocks throughout the day will be[0,-3,-1,-3,-4]
The Highest value of the stock is 0. Thus the output is0
*/

function stockValue(n,arr){
    // write code here
    let max = 0;
        let sum = 0;
    for(let i = 0;i<n;i++){
        sum += arr[i]
        if(sum>max){
            max = sum;
        }
    }
    console.log(max)
}