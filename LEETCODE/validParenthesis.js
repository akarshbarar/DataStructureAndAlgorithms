// STACK
//  O(n)
function isValid(s){

    if( s.length == 0 || s.length ==1){
        return false;
    }
var x=[];
var sum=0;
    for(var i=0;i<s.length;i++){
        if(s.charAt(i)=='('){
            x.push("(")
            sum++;
        }
        if(s.charAt(i)=='{'){
            x.push('{')
            sum++
        }
        if(s.charAt(i)=='['){
            x.push('[')
            sum++
        }
        if(s.charAt(i)==')'){//()
            if(x.pop()!="("){
                return false;
            }
            sum--;
        }
        if(s.charAt(i)=='}'){
            if(x.pop()!="{"){
                return false;
            }
            sum--
        }
        if(s.charAt(i)==']'){
            if(x.pop()!='['){
                return false
            }
            sum--;
        }
            
    }
    if(sum == 0){

        return true;
    }
    else{
        return false;
    }
}
console.log(isValid("(("))