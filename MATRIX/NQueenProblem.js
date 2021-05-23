// Classical N-Queen Problem
// Backtracking &&  Recursion
//  Place N Queens in NxN board so that no two queens are able to cut each other 

var n=5
var arr=Array.from(Array(n),()=>new Array(n).fill(0))

if(nQueen(arr,0,n)){
    for(var i=0;i<n;i++){
        console.log(arr[i])
    }
}

function nQueen(arr,row,n){
    if(row >= n){
        return true;
    }
    for(var col=0;col < n;col++){
        if(isSafe(arr,row,col,n)){
            arr[row][col]=1;
            if(nQueen(arr,row+1,n)){
                return true;
            }
            arr[row][col]=0;
        }
    }
    return false;
}

function isSafe(arr,row,col,n){
    for(var r=0;r<row;r++){
        if(arr[r][col] ==1){
            return false
        }
    }
    var r=row;
    var c=col;
    while( r >= 0 && c >=0){
        if(arr[r][c] ==1){
            return false;
        }
        r--
        c--
    }
    r=row
    c=col;
    while(r >=0 && c < n){
        if(arr[r][c]==1){
            return false;
        }
        r--
        c++
    }
    return true;
}