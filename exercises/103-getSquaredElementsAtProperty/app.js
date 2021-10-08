var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    
    var newArray = [];

    if (Object.prototype.toString.call(obj[key] ) !== '[object Array]' || !obj[key] ){
      return [];

    }else if(obj[key].length===0) {
   
      return [];

    } else {

      for (let i = 0; i < obj[key].length; i++){

        var sqr = 0; 
        sqr = obj[key][i] * obj[key][i];
        newArray.push(sqr);

      }
    }

    return newArray; 
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]