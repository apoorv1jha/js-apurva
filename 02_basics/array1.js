//array

const myArr = [0,1,2,3,4,5,"PUJA"]
const superHeroes = ["ironman","thor","spiderman","batman"]

const myArry = new Array(1,2,3,4,5)
console.log(myArry[1]);

// Array Methods

// myArry

myArry.push(6)
myArry.pop()
myArry.unshift(10)
myArry.shift()

console.log(myArry.includes(9));
console.log(myArry.indexOf(3));

const newArray = myArry.join()
console.log(myArry);
console.log(newArray);
console.log(typeof newArray);

// slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);