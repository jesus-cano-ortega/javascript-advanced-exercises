// Write your function here
var obj = {
    key: ['It', 'has', 'some', 'words']
  };

function getOddLengthWordsAtProperty(obj, key) {
    
    var newArray = [];

    if(obj[key].length === 0 || !obj.hasOwnProperty(key)){
        return []; 
    } else {

        for(let i = 0; i < obj[key].length; i++){

            if(obj[key][i].length %2 != 0){
                newArray.push(obj[key][i]); 
            }

        }

    }


    return newArray; 
}

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']