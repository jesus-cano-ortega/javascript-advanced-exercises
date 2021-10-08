function getLengthOfLongestElement(arr) {
    // your code here

    var result = 0; 

    for (let i = 0; i < arr.length; i++){

        if(arr[i].length > result){
            result = arr[i].length; 
        }

    }

    return result; 

}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5