var arr=[9,8,7,6,5,4,3,2,1,0]
var size=arr.length
var max=Math.max(...arr)
var count=Array(max+1).fill(0)
for(var i=0;i<size;i++){
    count[arr[i]]++;
}
console.log(count)
for(var i=1;i<=max;i++){
    count[i]+=count[i-1]
}
console.log(count)
var output=[]
for(var i=size-1;i>=0;i--){
    output[count[arr[i]]]=arr[i]
    count[arr[i]]--
}
console.log(output)