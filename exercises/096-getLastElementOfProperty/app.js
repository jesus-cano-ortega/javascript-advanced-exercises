// Write your function here
var obj = {
    key: [1, 2, 5]
};


function getLastElementOfProperty(obj, key) {
   
    if(obj[key].length === 0 || !obj.hasOwnProperty(key)){
        return undefined;
    } else {
        let i = obj[key].length;
        return obj.key[i-1];
    }
}

var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5