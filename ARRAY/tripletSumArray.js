var arr=[1, 4, 45, 6, 10, 8]
var l=arr.length
var x=13
arr.sort((a,b)=>{
    return a-b;
})


let left,right;
for(var i=0;i<l-2;i++){
    left=i+1;
    right=l-1;

    while( left < right){
        if(arr[i]+ arr[left]+arr[right] ==  x){
            console.log("TRUE")
            return true
        }
        if(arr[i]+ arr[left]+arr[right] >  x)
        {
            right--;
        }
        if(arr[i]+ arr[left]+arr[right] <  x){
            left++;
        }
    }
}