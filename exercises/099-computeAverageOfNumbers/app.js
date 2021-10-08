// Write your function here
function computeAverageOfNumbers(arr) {
    
    var sum = 0; 

    if (arr.length === 0){

        return 0; 

    } else {
      
        for(let i = 0; i < arr.length; i++) {

            sum += arr[i]; 

        }
    }

    var prom = sum/arr.length; 
    return prom; 

}


var input = [1,2,3,4,5];

var output = computeAverageOfNumbers(input);
console.log(output); // --> 3