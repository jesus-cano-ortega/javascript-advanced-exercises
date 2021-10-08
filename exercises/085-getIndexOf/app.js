// Write your function here
function getIndexOf(char, str) {
    
    let newArray = str.split(""); 
    
    console.log(newArray);

    for (let i = 0; i < newArray.length; i++) {
        
        if (char === newArray[i]) {          
            return i; 
        } 
    }

    return -1; 
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2