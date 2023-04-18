const firstName = "Konrad";
const age = 32;

console.log(firstName);
console.log(age);
console.log(`Siema, nazwywam się ${firstName} i mam ${age} lata.`);

function calculate (myNumber) {
    console.log(`Dostałem ${myNumber}`);
    return myNumber*7;
}


const myResult = calculate(age);

console.log(myResult);