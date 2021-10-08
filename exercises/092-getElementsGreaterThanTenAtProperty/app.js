// Write your function here
var obj = {
    key: [1, 20, 30]
  };

function getElementsGreaterThan10AtProperty(obj, key) {
    
    var arr = [];
    
    if(obj[key].length === 0 || !obj.hasOwnProperty(key)){
        return []; 
    } else{

        for(let i=0; i < obj[key].length; i++){
            if(obj[key][i] > 10){
                arr.push(obj[key][i]);
            }
        }

        return arr; 

    }


}    
    

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]