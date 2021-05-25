// N*N Chess Board
// N queens 
// Queen can moove in row cloumn diagnol
// No 2 queens cross/cut each other 
// Classic 
// Backtracing
// recurssion

var n=10
// 2D array in js
var arr=Array.from(Array(n),()=>Array(n).fill(0))


function isSafe(arr,row,col,n){
    for(var i=0;i<row;i++){
        if(arr[i][col]==1){
            return false;
        }
    }

    var r=row
    var c=col
    while( r>=0 && c >=0){
        if(arr[r][c]==1){
            return false;
        }
        r--;
        c--;
    }
    r=row;
    c=col;
    while(r>=0 && c<n){
        if(arr[r][c]==1){
            return false;
        }
        r--;
        c++;
    }
    return true;
}
function NQueen(arr,row,n){

    if(row >= n){
        return true;
    }

    for(var col=0;col<n;col++){
        if(isSafe(arr,row,col,n)){
            arr[row][col]=1;
            if(NQueen(arr,row+1,n)){
                return true;
            }
            arr[row][col]=0;
        }
    }
    return false;
}

if(NQueen(arr,0,n)){
    for(var i=0;i<n;i++){
        console.log(arr[i])
    }
}
else{
    console.log("No Right positions")
}
