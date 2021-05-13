class Solution {
    
    PalinArray(arr,n){
        //code here
        
        for(var i=0;i<n;i++){
            if(pali(arr[i])){
                
            }
            else{
                return 0;
            }
        }
        return 1;
    }
    
  
}
  function pali(x){
        var s=x.toString().split("").reverse().join("");
        
        if(parseInt(s)===x)
            return true;
        else
            return false
    }