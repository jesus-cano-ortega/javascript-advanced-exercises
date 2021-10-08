// Write your function here
var obj = {
    key: [1, 2, 6]
  };


function getNthElementOfProperty(obj, key, range) {
    
    if(obj[key].length === 0 || !obj.hasOwnProperty(key) || range > obj[key].length){
        return undefined;
    } else {

        return obj[key][range]; 

    }
}

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2