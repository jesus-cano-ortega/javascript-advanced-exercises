var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };

  /*var objProperties = Object.keys(obj);
  console.log(objProperties);*/



function removeStringValuesLongerThan(num, obj) {
    // your code here

   var objProperties = Object.keys(obj); // ['name, 'age', 'location']
   
   for (let i = 0; i < objProperties.length; i++) { // 0, 1, 2
      
        if(typeof(obj[objProperties[i]] === "string")) {

            if(obj[objProperties[i]].length > num){   // obj[objProperties[0]] = obj[name] = 'Montana'
                delete obj[objProperties[i]]; 
            }
        } 
   }
   
   return objProperties;

}
