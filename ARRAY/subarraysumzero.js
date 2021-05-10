
function subarrayzerosum(arr){

    var s=new Set();
    s.add(0)
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        if(s.has(sum)){
            return true
        }
        else{
            s.add(sum);
        }
    }
    console.log(s)
    return false;

}




arr=[10,-10]
console.log(subarrayzerosum(arr))