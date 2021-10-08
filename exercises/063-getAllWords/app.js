function getAllWords(str) {
    // your code here
    var arr =[];
    arr = str.split(" ");
    return arr; 
}

var output = getAllWords('Radagast the Brown');
console.log(output); 