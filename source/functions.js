// Simple function definition

function countVowels(inputString){
    let x = 0;
    let lowerString = inputString.toLowerCase();
    for(let i = 0;i<lowerString.length;i++){
        if(lowerString[i] == 'a' || lowerString[i] == 'e' || lowerString[i] == 'i' || lowerString[i] == 'o' || lowerString[i] == 'u')
            x++;
    }
    return x;
}
console.log(countVowels("Elephant"));
console.log(countVowels("abcdefghijk"));

// Arrow functions

const arrowCountVowels = (inputString) => {
    let x = 0;
    let lowerString = inputString.toLowerCase();
    for(let i = 0;i<lowerString.length;i++){
        if(lowerString[i] == 'a' || lowerString[i] == 'e' || lowerString[i] == 'i' || lowerString[i] == 'o' || lowerString[i] == 'u')
            x++;
    }
    return x;
}
console.log(arrowCountVowels("Elephant"));
console.log(arrowCountVowels("abcdefghijk"));

// For each function for arrays

let array = [1,2,3,4,5,6,7,8,9,10];
array.forEach((val) => {console.log(val*val);});