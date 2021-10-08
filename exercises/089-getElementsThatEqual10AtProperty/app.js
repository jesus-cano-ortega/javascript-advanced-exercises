// Write your function here
var obj = {
    key: [1000, 10, 50, 10]
  };

function getElementsThatEqual10AtProperty(obj, key) {

   let tens = [];

   if(!obj.hasOwnProperty(key)) {
       return [];
    }  else {
        if(obj[key].length===0) return [];
        else {
            for(let j=0; j<obj[key].length; j++)
              {
                if(obj.key[j]===10) {
                    tens.push(obj[key][j]);
                  }
              }
          
          }
      }
    
      return tens;
}

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]