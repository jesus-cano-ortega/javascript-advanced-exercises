function countCharacter(str, char) {
    // your code here
    var arr = str.split("");
    var count = 0;
    for(var i=0; i<str.length; i++)
      {
        if(arr[i]===char)
          {
            count++;
          }
      }

    return count;

}