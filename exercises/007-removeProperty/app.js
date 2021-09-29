var obj = {
  name: 'Sam',
  age: 20
}

function removeProperty(obj, key) {
  // your code here
  delete obj[key]
}

removeProperty(obj, 'name');
console.log(obj.name); // --> undefined