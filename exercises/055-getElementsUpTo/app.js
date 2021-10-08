function getElementsUpTo(array, n) {
  // your code here
  return array.splice(0, n);
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output);