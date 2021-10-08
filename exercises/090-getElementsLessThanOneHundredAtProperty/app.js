var obj = {
    //key: [1000, 20, 50, 500]
    key: [1000, 10, 50, 10, 20, 6, 10, 98, 10]
  };

// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    
    let elements = [];

    if(!obj.hasOwnProperty(key)) { //No contiene propiedad 'key'
        return [];
     }  else {
         if(obj[key].length===0) return []; //Contiene propiedad 'key' pero esta vacía
         else {
             for(let j=0; j<obj[key].length; j++) //De 0 a 3
               {
                 if(obj.key[j] < 100) { // Si obj.key[0] (1000) < 100 
                     elements.push(obj.key[j]);
                   }
               }
           
           }
       }
     
       return elements;
}

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]