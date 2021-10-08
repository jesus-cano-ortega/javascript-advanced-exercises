function getAllElementsButFirst(array) {
  // your code here
  array.shift();
  return array;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output);