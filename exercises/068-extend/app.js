var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    var obj2Properties = Object.keys(obj2);
    for(var i=0; i<obj2Properties.length; i++)
    {

      if(!obj1.hasOwnProperty(obj2Properties[i])){
        obj1[obj2Properties[i]] = obj2[obj2Properties[i]];
      }
    }
  return obj1;
}