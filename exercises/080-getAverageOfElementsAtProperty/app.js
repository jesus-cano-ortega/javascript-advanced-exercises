// Write your function here
var obj = {
    key: [1, 2, 3]
};


function getAverageOfElementsAtProperty(obj, key) {
    
    var element = 0; 
    var average = 0; 

    for (let index = 0; index < obj.key.length; index++) {
    
        element += obj.key[index]; 
        average = element / obj.key.length;
    
    }

    return average;
}


var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);
