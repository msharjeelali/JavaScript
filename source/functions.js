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