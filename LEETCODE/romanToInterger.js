/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    var x=[];
    for(var i=0;i<s.length;i++){
        if(s.charAt(i)=="M") x.push(1000)
        if(s.charAt(i)=="D") x.push(500)
        if(s.charAt(i)=="C") x.push(100)
        if(s.charAt(i)=="L") x.push(50)
        if(s.charAt(i)=="V") x.push(5)
        if(s.charAt(i)=="I") x.push(1)
       if(s.charAt(i)=="X") x.push(10)
    }

    var y=0;
    for(let i=0;i<x.length-1;i++){
        if(x[i]>=x[i+1]){
            
        }
        else{
            x[i]=x[i]*-1;
        }
    }
    console.log(x);

    for(var i=0;i<x.length;i++){
        y=y+x[i];
    }

    console.log(y)

    
};


romanToInt("LVIII");
// 1000+900+90+4=1994