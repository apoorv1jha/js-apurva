const score = 100
console.log(score); // this is number

const number = new Number(100)
console.log(number);         // this is object
console.log(number.toString().length);
console.log(number.toFixed(2));

const otherNumber = 123.65784
console.log(otherNumber.toPrecision(5));

const KBC = 70000000
console.log(KBC.toLocaleString('en-IN'));


// ********************************Maths*************************************

console.log(Math);
console.log(Math.abs(-69));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.9));
console.log(Math.min(1.45,69));
console.log(Math.max(1,45,69));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 30
console.log(Math.floor(Math.random()*(max - min + 1))+min);