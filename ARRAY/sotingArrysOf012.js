        
var arr=[0,1,2,0,1,2,0,1,2];
       

var l=arr.length;
var x=new Array(l).fill(0);


for(var i=0;i<l;i++){
    x[arr[i]]=x[arr[i]]+1;
}
console.log(x)
var y=[]
for(i=0;i<l;i++){
    if(x[i] != 0){
        y.push(i)
        x[i]=x[i]-1
        i--;
    }
}
console.log(y)