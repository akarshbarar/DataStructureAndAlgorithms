// Binary Search
var matrix=[
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
];
var target=34

var i=0
var j=matrix[0].length-1

while(i< matrix.length && j >=0){

        if(matrix[i][j]==target){

            console.log(i,j)
            return;
        }
        else
            if(matrix[i][j]>target){
                   j-- 
            }
            else{
                i++
            }
        
 }