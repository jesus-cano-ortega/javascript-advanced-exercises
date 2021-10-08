function filterOddLengthWords(words) {
    // your code here
    var newArray = []; 

    for(let i = 0; i < words.length; i++){
        if(words[i].length %2 != 0){
            newArray.push(words[i]);
        }
    }

    return newArray; 
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']