var obj = {
  key: ['a', 'long', 'game']
};

function getEvenLengthWordsAtProperty(obj, key) {
  // your code here

  var retarr =[];
  if( Object.prototype.toString.call(obj[key] ) !== '[object Array]' || !obj[key] )  {
      
    return [];

  }else if(obj[key].length===0) {
   
    return [];
 
  }else{
       
    for( let j=0; j<obj[key].length; j++) {
        
        if(obj[key][j].length%2===0) {
            retarr.push(obj[key][j]);
        }
      }
  }

  return retarr;

}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']