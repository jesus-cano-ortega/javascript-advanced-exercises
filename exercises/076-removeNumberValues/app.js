var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    var objProperties = Object.keys(obj); // ['a, 'b', 'c']
   
    for (let i = 0; i < objProperties.length; i++) { // 0, 1, 2
       
         if(typeof(obj[objProperties[i]]) === "number") {
            
            delete obj[objProperties[i]]; 

         } 
    }
    
    return objProperties;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }