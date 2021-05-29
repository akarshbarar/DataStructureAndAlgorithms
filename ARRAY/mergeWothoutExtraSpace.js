

var ar1=[2, 6, 7, 8, 9, 9, 10, 10, 11, 12, 12, 12, 12, 13, 13, 13, 14, 15, 16, 16, 17, 18, 18, 19, 20]
var ar2=[1, 5, 5, 7, 7, 8, 9, 11, 15, 18, 18, 18, 20, 20]
var N=ar1.length
var M=ar2.length


var i=0;
var j=0;
var x=[]
while(i<N || j < M){
    if(ar1[i]<=ar2[j]){
        console.log(ar1[i],"pushed",i)
        x.push(ar1[i])
        i++
        if(i==N){
            break
        }
    }
    if(ar1[i]>=ar2[j]){
        console.log(ar2[j],"pushed",j)
        x.push(ar2[j])
        j++
        if(j==M){
            break
        }
    }
   
}
if(i==N){
    for(var k=i-1;k<M;k++){
        x.push(ar2[k])
    }
}
if(j==M){
    for(var k=j-1;k<N;k++){
        x.push(ar1[k])
    }
}
console.log(x)