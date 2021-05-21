function romanToInt(s){

    const roman={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
// LVIII
    var sum=0;
   for(var i=0;i<s.length;i++){
       var s1=roman[s.charAt(i)]
       if(i+1 < s.length){
            var s2=roman[s.charAt(i+1)]
            if(s1 >=s2){
                sum=sum+s1;
            }
            else{
                sum=sum-s1
            }
       }
       else{
           sum+=s1;
       }
   }
   console.log(sum)
}

romanToInt("MCMXCIV")