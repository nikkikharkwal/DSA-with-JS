/*

Description

Betty and Archie are best friends and since Archie's birthday is in one week, Betty wants to buy a present for him. She goes to the gift shop and selects a gift of price P. Betty has 9 coins each of value from 1 to 9 respectively. Find out the different in which Betty can pay for the gift such that she can only use K coins.

Input
The first line contains price P of the gift and number of coins K she can use.

Constraints
1<= P <= 60
2<= K <= 9

Output

Display the different ways in which Betty can pay for the gift using only K coins in lexicographically increasing order. If no combinations are present print -1.

Sample Input 1

8 2

Sample Output 1

1 7
2 6
3 5

Hint 

There are three distinct ways to buy the gift by using 2 coins : (1 + 7), (2 + 6) , (3 + 5)
She can not use (4 + 4) as she only has one coin for each value.
*/

function bettyBuys(p,k){
    let coins = [1,2,3,4,5,6,7,8,9];
    let arr = [];
    
    function noOfWays(coins,p,k,x,pos){
        if(x.length == k && sum(x) == p){
            
        let temp = [];
        for(let i = 0;i < x.length;i++){
            temp.push(x[i]);
        }
        arr.push(temp);
        return;
    }
    if(sum(x) > p || x.length > k){
        return;
    }
    else {
        for(let i= pos;i<coins.length;i++){
            x.push(coins[i]);
            noOfWays(coins,p,k,x,i+1);
            x.pop();
        }
        return;
    }
 }
 
 noOfWays(coins,p,k,[],0);
 if(arr.length === 0){
     console.log(-1);
 }
 else {
     for(let i = 0; i< arr.length;i++){
         console.log(arr[i].join(" "));
     }
 }
}

function sum(coins){
    let add = 0;
    for(let i = 0;i < coins.length;i++){
        add += coins[i];
    }
    
    return add;
}