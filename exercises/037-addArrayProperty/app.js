var myObj = {};
var myArray = [1, 3];


function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
  
  return obj;
}

addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty);
console.log(myObj);