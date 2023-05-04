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

const heading = document.querySelector('.main_heading--js');

console.log(heading);

heading.innerHTML = (`Siema, nazwywam się ${firstName} i mam ${age} lata.`);

console.log(heading);

const column = document.querySelector('.column--js');

console.log(column);




column.innerHTML = (`Nie rzucim ziemi skąd nasz ród!
Nie damy pogrześć mowy.
Polski my naród, polski lud,
Królewski szczep Piastowy.
Nie damy, by nas zgnębił wróg!
Tak nam dopomóż Bóg!
Tak nam dopomóż Bóg!

Do krwi ostatniej kropli z żył
Bronić będziemy ducha,
Aż się rozpadnie w proch i w pył
Krzyżacka zawierucha.
Twierdzą nam będzie każdy próg!
Tak nam dopomóż Bóg!
Tak nam dopomóż Bóg!`);



 




