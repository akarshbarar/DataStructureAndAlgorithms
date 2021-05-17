var arr=[1,5,8,10];
var n=arr.length
var k=2;
// var y=[];
// for(var i=0;i<arr.length;i++){
//     if((arr[i]+k)>0)
//         y.push(arr[i]+k);
//     if((arr[i]-k) >0)
//         y.push(arr[i]-k)
// }

// console.log(y)

var ans=arr[n-1]-arr[0];
var small=arr[0]+k
var large=arr[n-1]-k;

var mi,ma;

for(var i=0;i<n-1;i++){

        mi=Math.min(small,arr[i+1-k]);
        mz=Math.max(large,arr[i]+k)
        if(mi < 0)
            continue;
        ans=Math.min(ans,ma-mi)
}
console.log(ans)