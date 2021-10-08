var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here

    var result = 0;

    if(Object.prototype.toString.call(obj[key]) !== '[object Array]' || !obj[key])  {
        
      return [];
  
    }else if(obj[key].length===0) {
     
      return [];
   
    }else{
         
      for(let i=0; i<obj[key].length; i++) {
          
          if(obj[key][i] > result) {
            
            result = obj.key[i];
            
          }
        }
    }
  
    return result;

}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4