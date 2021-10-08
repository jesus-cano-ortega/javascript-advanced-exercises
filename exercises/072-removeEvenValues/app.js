var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeEvenValues(obj) {
    // your code here

    var objProperties = Object.keys(obj); // ['a, 'b', 'c']
   
    for (let i = 0; i < objProperties.length; i++) { // 0, 1, 2
       
         if((obj[objProperties[i]] %2 === 0)) {
            
            delete obj[objProperties[i]]; 

         } 
    }
    
    return objProperties;
}

removeEvenValues(obj);
console.log(obj);