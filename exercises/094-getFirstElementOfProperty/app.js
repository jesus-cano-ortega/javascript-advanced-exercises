// Write your function here
var obj = {
    key: [1, 2, 4]
  };


function getFirstElementOfProperty(obj, key) {
    
    
    if(obj[key].length === 0 || !obj.hasOwnProperty(key)){
        return undefined;
    } else {
        return obj[key][0];
    }

}

var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1