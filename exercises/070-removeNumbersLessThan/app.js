var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    var objProperties = Object.keys(obj);
  
    for(var i=0; i<objProperties.length; i++)
      {
        if(obj[objProperties[i]]<num)
          {
            delete obj[objProperties[i]];
          }
      }
  
      return obj;
}
