var x=[3,2,4];

var k=6;

for(var i=0;i<x.length;i++){
    for(var j=i+1;j<x.length;j++){
        if(x[i]+x[j]==k){
            console.log(i,j);
        }
    }
}


