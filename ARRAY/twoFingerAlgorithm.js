var arr=[1,2,3,4,5];
var x=9;

var i=0
var j=arr.length-1

while(i < j )
{
    if(arr[i]+arr[j] == x){
        console.log(arr[i],arr[j])
        break;
    }
    if(arr[i]+arr[j] < x){
        i++
    }
    if(arr[i]+arr[j] > x)
        j--
}
