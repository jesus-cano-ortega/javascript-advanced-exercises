var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here

    var newArray = [];

    if(Object.prototype.toString.call(obj[key]) !== '[object Array]' || !obj[key])  {
        
      return [];
  
    }else if(obj[key].length===0) {
     
      return [];
   
    }else{

      for(let i = 0; i < obj[key].length-1; i++){
        newArray.push(obj[key][i]);
      }
      
    }

  return newArray; 
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]