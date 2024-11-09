const marvel = ["ironman","thor","captain america"]
const dc = ["batman","joker","superman"]

//marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);  //// 1st method


const allHeroes = marvel.concat(dc)  //2nd method
console.log(allHeroes);

const allNewHeroes = [...marvel,...dc]    //3rd method
console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5],[6,7],[8,9,10]]
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("apoorv"));
console.log(Array.from("apoorv"));
console.log(Array.from({name:"apoorv"}));   ///idher dhyan de lawde

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));