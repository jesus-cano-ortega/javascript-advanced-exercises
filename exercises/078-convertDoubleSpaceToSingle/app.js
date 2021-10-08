function convertDoubleSpaceToSingle(str) {
    // your code here
    
    let arr = str.split("  ");
    str = arr.join(" ");
    return str;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"