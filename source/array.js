// Using for of loop
let marks = [91,72,83,46,58,62,73,82,91,100];

let sum = 0;
for(let elem of marks)
    sum += elem;
let avg = sum / marks.length;

console.log(`Average of given marks is ${avg}`);

// Using simple for loop
let score = [91,72,83,46,58,62,73,82,91,100];

let total = 0;
for(let i =0;i<score.length;i++)
    total+=score[i];
let mean = total/score.length;

console.log(`Mean of given scores is ${mean}`);

// Apply discount on items

let items = [250,645,300,900,50];
let discount = 10;

for(let i = 0;i <items.length;i++)
    items[i] = items[i] - items[i]*discount/100;

console.log(`After applying discount prices are: ${items}`);

// Practice of array methods

let companies = ["Bloomberg","Microsoft","Google","Uber","IBM","Netflix"];
console.log(`Initial : ${companies}`);

companies.shift();
console.log(`After removing first : ${companies}`);

companies.splice(3,1,"Ola");
console.log(`Replace : ${companies}`);

companies.push("Amazon");
console.log(`After adding Amazon : ${companies}`);
