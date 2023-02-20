/*
Description
Betty loves candies, so she went to the store to buy some. She has some coins and she wants to spend all of them. The store has N distinct candies each having some cost and there are infinite amount of each candy in the store. Betty can choose the same candy any number of times as long as she have coins greater than or equal to the cost of that candy. Find and display the unique combinations in which she can buy candies such that the sum of cost of all the candies is equal to number of coins she has.
The input array is sorted in ascending order.

Input
Input Format

The first line contains the number of distinct candies N and the amount of coins C that Betty has.
The second line contains the cost of each candy.

Constraints

1<= N <= 30
1<= C <= 500
1<= cost[i] <= 200

Output

Display all the distinct ways in which Betty can buy the candies such that the sum of cost of all candies she buys is equal to the number of coins in lexicographically increasing order. If no combinations are possible print -1.

Sample Input 1
4 7 
2 3 6 7

Sample Output 1

2 2 3
7

Sample Input 2
3 8
2 3 5

Sample Output 2
2 2 2 2
2 3 3
3 5

Sample Input 3
1 1 
2

Sample Output 3

-1 

Hint

In the first test case, Betty can choose the candies in two ways : (2 + 2 + 3) and (7).

In the second test case, Betty can choose the candies in three ways : (2 + 2 + 2 + 2) , (2 + 3 + 3) and (3+5).

In the third test case, no combination of candies is possible.
*/

function buyCandies(n,k,arr){
    let res = [];
    
    differentWays(k,0, [],arr,res);
    
    if(res.length == 0){
        console.log(-1);
    }
    else {
        for(let i = 0; i < res.length; i++){
            let temp = "";
            for(let j = 0; j < res[i].length;j++){
                temp += res[i][j] + " ";
            }
            console.log(temp);
        }
    }
}

function differentWays(rem, pos, cur,arr,res){
    if(rem < 0){
        return;
    }
    if(rem == 0){
        res.push(cur.slice());
    }
    for(let i = pos; i < arr.length; i++){
        cur.push(arr[i]);
        differentWays(rem - arr[i], i, cur,arr,res);
        cur.pop();
    }
}