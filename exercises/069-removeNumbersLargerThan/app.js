var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here

  var objProperties = Object.keys(obj);
  
  for(var i=0; i<objProperties.length; i++)
    {
      if(obj[objProperties[i]]>num)
        {
          delete obj[objProperties[i]];
        }
    }

    return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj);