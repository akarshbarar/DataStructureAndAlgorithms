/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    if(s.length==1) return false;
    
    var x=[];
    var flag=0;
    var sum=0;
    for(var i=0;i<s.length;i++){
        if(s.charAt(i)=='(') 
        {
            x.push("(");
            sum+=1;
        }
        if(s.charAt(i)=='{') 
        {
            x.push("{");
            sum+=1
        }
        if(s.charAt(i)=='[') 
        {
            x.push("[");
            sum+=1;
        }
        
        if(s.charAt(i)==")"){
            flag=1;
            var z=x.pop();
            if(z!="("){
                return false;
            }
            sum-=1;
        }
        
        if(s.charAt(i)=="}"){
            flag=1;
            var z=x.pop();
            if(z!="{"){
                return false;
            }
            sum-=1;
        }
        
        if(s.charAt(i)=="]"){
            flag=1;
            var z=x.pop();
            if(z!="["){ 
                return false;
            }
            sum-=1;
        }
    }
    if(flag==1 && sum==0){
            return true;

    }
    else{
        return false;
    }
};