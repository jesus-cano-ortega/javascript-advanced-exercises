
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here

  var newArray =[];

  if(Object.prototype.toString.call(obj[key]) !== '[object Array]' || !obj[key] )  {
      
    return [];

  }else if(obj[key].length===0) {
   
    return [];
 
  }else{
       
    for( let i=0; i<obj[key].length; i++) {
        
        if(obj[key][i] %2 ===0) {
            newArray.push(obj[key][i]);
        }
      }
  }

  return newArray;

}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]