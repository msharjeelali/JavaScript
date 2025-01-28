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
//console.log(countVowels("Elephant"));
//console.log(countVowels("abcdefghijk"));

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
//console.log(arrowCountVowels("Elephant"));
//console.log(arrowCountVowels("abcdefghijk"));

// For each function for arrays

let array = [1,2,3,4,5,6,7,8,9,10];
//array.forEach((val) => {console.log(val*val);});

// Filter method

let marks = [23,45,101,93,45,889,76,56];
let filteredMarks = marks.filter((val)=>{
    return val > 90;
});
console.log(filteredMarks);

// Reduce method

let n = 10;
let myArray = [];
for(let i = 1;i<= n;i++){
    myArray.push(i);
}
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
})
let product = myArray.reduce((prev,curr) => {
    return prev*curr;
})

console.log(myArray);
console.log(sum);
console.log(product);

