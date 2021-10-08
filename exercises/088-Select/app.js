// Write your function here
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function select(arr, obj) {

  let objnew = new Object();

  for(let i=0; i<arr.length; i++) { // 0, 1, 2
  
    if(obj.hasOwnProperty(arr[i])) {

      objnew[arr[i]] = obj[arr[i]]; 

    }
  }
  return objnew;
}

var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }