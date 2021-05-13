var a=[-2,-3,4,-1,-2,1,5,-3]
          

var max__sum=0
var current__sum=0
var start=0
var end=0
var temp=0

for(var i=0;i<a.length;i++){
    current__sum=current__sum+a[i];

    if(current__sum < 0){
        current__sum=0
        temp=i+1
    }

    if(current__sum > max__sum){
        max__sum=current__sum
        start=temp
        end=i
    }
}

console.log(max__sum)
console.log(start,end)


