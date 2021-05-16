var arr=[1, 4, 45, 6, 10, 8]
var l=arr.length
var x=20
arr=arr.sort((a,b)=>{
    return a-b;
});//O(n.log(n))

let left, right;
for(let i=0;i<l-2;i++){

    left=i+1
    right=l-1
    while(left < right){
        if(arr[i]+arr[left]+arr[right] == x){
            console.log("Find the sum",arr[i],arr[left],arr[right])
            break;
        }
        if(arr[i]+arr[left]+arr[right]  < x)
        {
            left++
        }
        if ( arr[i]+arr[left]+arr[right] > x)
        {
            right--;
        }
    }
}