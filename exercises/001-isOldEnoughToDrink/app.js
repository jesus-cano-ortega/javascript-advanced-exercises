function isOldEnoughToDrink(number){
    // your code here	
    if(number < 21) { return false; }
    else return true;
}

var output = isOldEnoughToDrink(22);
console.log(output);