/*
Description

Ansh has a new game called Dropping Balls. Initially, Ansh has a grid a of size n×mEach cell (x,y) contains an integer a(x,y) denoting the direction of how the ball will move.

a(x,y)=1— the ball will move to the right (the next cell is (x,y+1));
a(x,y)=2— the ball will move to the bottom (the next cell is (x+1,y));
a(x,y)=3— the ball will move to the left (the next cell is (x,y−1)).
Every time a ball leaves a cell (x,y), the integer a(x,y) will change to 2. Ansh will drop k balls sequentially, each starting from the first row, and on the c1,c2,…,ck-th (1≤ci≤m) columns.

Determine in which column each ball will end up in (position of the ball after leaving the grid).


Input
Input Format

The first line contains the number of testcases, T

For each testcase:

The first line contains the number of rows and columns, n and m and the number k

The next n line contains the values of a(x,y)

The last line contains k integers, the columns at which the ith ball is dropped

Constraints

1<=T<=10

1<=n,m<=1000

1<=k<=10^4

1<=a(x,y)<=3


Output
For each testcase output k integers — the i-th integer denoting the column where the i-th ball will end.


Sample Input 1 

1
5 5 3
1 2 3 3 3
2 2 2 2 2
2 2 2 2 2
2 2 2 2 2
2 2 2 2 2
1 2 1
Sample Output 1

2 2 1 

*/

function droppingBalls(n,m,k,mat,balls){
    let start = 0;
    let ans = "";
//k is the number of balls to be dropped
    while(k--){
        let y = 0;
        let x = balls[start++] - 1;

//if y-axis crosses the number of rows
        while(y !== n ){
            //1 -> Right

            if(mat[y][x] == 1){
                mat[y][x] = 2;
                x++;
            }
            //2 -> Bottom
            else if(mat[y][x] == 2){
                y++;
            }
            //3 -> Left
            else{
                mat[y][x] = 2;
                x--;
            }
        }
        
        ans += x + 1 + " ";
    }
    console.log(ans)
}