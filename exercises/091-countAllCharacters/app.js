// Write your function here
function countAllCharacters(str) {
   
    var charcount = new Object();
    var arr = str.split("");
  
  
   if(str==="")//not null
    {
      return {};
    }
  for(var i=0; i<arr.length;i++)
    {
      if(!charcount.hasOwnProperty(arr[i]))
        {
          charcount[arr[i]] = 1;
        }
      else{
        charcount[arr[i]]++;
      }
    }
  
  return charcount;

}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}