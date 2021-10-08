var obj = {
    name: 'Sam',
    age: 20
  }

function removeStringValues(obj) {
    // your code here
    var objProperties = Object.keys(obj); // ['a, 'b', 'c']
   
    for (let i = 0; i < objProperties.length; i++) { // 0, 1, 2
       
         if(typeof(obj[objProperties[i]]) === "string") {
            
            delete obj[objProperties[i]]; 

         } 
    }
    
    return objProperties;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }