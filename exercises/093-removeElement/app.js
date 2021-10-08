// Write your function here
function removeElement(arr, param) {
    
    var newArray = []; 

    if(arr.length === 0){
        return []; 

    } else {
        
        for(let i = 0; i < arr.length; i++) {

            if (arr[i] != param) {
            
                newArray.push(arr[i]); 
                
            }

        }

    }

    return newArray; 
}


var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]