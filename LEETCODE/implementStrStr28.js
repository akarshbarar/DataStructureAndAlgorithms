/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    if(haystack.length==0 && needle.length==0) 
        return 0;
    
    else  if(haystack.length==0)
        return -1;
    else if(needle.length==0)
        return 0
    
    return haystack.indexOf(needle);
};