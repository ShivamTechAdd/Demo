const score = 200;

const balance = new Number(100);
console.log(balance);
console.log(typeof(balance.toString));

// maths //

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(2.5));

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1)) + min);

// date time //
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myDate.getTime());


