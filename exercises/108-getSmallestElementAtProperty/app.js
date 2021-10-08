var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here

  var result = 9999999;

  if(Object.prototype.toString.call(obj[key]) !== '[object Array]' || !obj[key])  {
      
    return [];

  }else if(obj[key].length===0) {
   
    return [];
 
  }else{
       
    for(let i=0; i<obj[key].length; i++) {
        
        if(obj[key][i] < result) {
          
          result = obj.key[i];
          
        }
      }
  }

  return result;
}

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1