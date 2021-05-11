// var arr=[6,-3,-10,0,2];
// var arr=[8, -2, -2, 0, 8, 0, -6, -8, -6, -1]
        //    var arr=[2, 3, 4, 5, -1, 0] 
           var arr=[0, 2 ,1, 7]
var x=[];//0,
var res=arr[0]; //2
var result=res;//0

x.push(res)
for(var i=1;i<arr.length;i++){

    if(res==0){
        res=arr[i+1]
        i++
        result=res
        
    }
    else{
        res=res*arr[i];
        x.push(res)
        if(res==0){
            res=arr[i+1]
            i++;
            result=res
        }
    }

}
var temp=x[0]
for(var i in x){
    if(x[i]>temp){
        temp=x[i]
    }
}
console.log(x)
console.log(temp)