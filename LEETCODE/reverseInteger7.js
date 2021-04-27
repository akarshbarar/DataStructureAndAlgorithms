/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    if(x>(Math.pow(2,31)-1)) return 0;
    
    if(x<Math.pow(-2,31)) return 0;

    if(x>0){
        var r=parseInt(rev(x.toString()))
        
        if(r>(Math.pow(2,31)-1)){
            return 0
           }
        else if(r<Math.pow(-2,31)){
                return 0;
            }
        else{
            return r;
        }
        
    }
    else if(x<0){
        x=x*-1;
        var r=parseInt(rev(x.toString()))

        if(r>(Math.pow(2,31)-1)){
            return 0
           }
        else if(r<Math.pow(-2,31)){
                return 0;
            }
        else{
            return parseInt(r)*-1;
        }
    }
    else if(x==0){
        return 0;
    }
    
};

function rev(str){
    return str.split("").reverse().join("");
}