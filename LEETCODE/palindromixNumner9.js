/**
 * @param {number} x
 * @return {boolean}
 * -2^31 <= x <= 2^31 - 1
 */
 var isPalindrome = function(x) {
    
    if(x<Math.pow(-2,31) || x>Math.pow(2,31))
            return false;    
    if(x==0) return true;
    if(x<0){
        return false;
    }
    else{
        
        var r=parseInt(rev(x.toString()));
        if(x===r && r>=Math.pow(.2,31) && r<=Math.pow(2,31)){
            return true;
        }
        else{
            return false;
        }
    }
    
};

function rev(str){
    
    return str.split("").reverse().join("");
}