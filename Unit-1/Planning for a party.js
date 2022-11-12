/*
Description

Jim and Pam are inviting friends for a party. But, they want to invite only those friends who have helped them in any way. So, they have made two arrays, indicating the number of people they have taken help from. Each person, has been assigned a unique ID, in the form of a number.

Both, Jim and Pam make their separate invite listAandBbased on the number of people, they have taken help from. Find out if the lists created by the two of them are same or not.

Note: A person might have helped them multiple times, and obviously would be invited only once


Input
The first line of the input containsN, the number of people Pam has taken help from

Next line containsNspace separated integers, indicating the ID's of the people, Pam has taken help from

The next line containsM, the number of people Jim has taken help from

Next line containsMspace separated integers, indicating the ID's of the people, Jim has taken help from

Constraints

1 <=N, M<= 10000

1 <=A[i], B[i]<= 10000


Output
For each test case, printYes, if the lists created by Jim and Pam are same, else printNo


Sample Input 1 

6
1 2 2 3 4 5
6
1 2 3 4 5 5
Sample Output 1

Yes
Sample Input 2 

5
1 2 2 3 4 
6
1 2 3 4 5 5
Sample Output 2

No
Hint

In the first sample test case, the list created by Pam is1 2 3 4 5, while the one created by Jim is1 2 3 4 5. Since, both of them are equal, therefore, the answer isYes

In the second sample test case, the list created by Pam will be1 2 3 4, while the one created by Jim is1 2 3 4 5. Since, both of them are not equal, therefore, the answer isNo
*/

function partyPlanning(N,PamID,M,JimID){
    //write code here
    let obj = {};
    for(let i = 0; i<N;i++){
        if(obj[PamID[i]]==undefined){
            obj[PamID[i]] = 1;
        }
        else {
            obj[PamID[i]]++;
        }
    }
    let obj1 = {};
    for(let j = 0; j<M;j++){
        if(obj1[JimID[j]]==undefined){
            obj1[JimID[j]] = 1;
        }
        else {
            obj1[JimID[j]]++;
        }
    }
    let count = 0;
    for(let i in obj){
        for(let j in obj1){
            if(i==j){
                count++;
            }
        }
    }
    let length1 = Object.keys(obj).length
    let length2 = Object.keys(obj1).length
    if(count==length1 && count==length2){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}