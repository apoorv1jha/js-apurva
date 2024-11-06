const name = "apurva"
const repo = 1

// consple.log(name+repo+"value");

//console.log('hello i am ${name} and my repocount is ${repo}');
console.log(`Hello my name is ${name} and my repo count is ${repo}`);


const gameName = new String("apurva-kumar-jha")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// conosle.log(gameName.lenth);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(3));
 console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,0)
console.log(anotherString);

const newOne = "   apoorv   "
console.log(newOne);
console.log(newOne.trim());

const url = "https://aabrakadabra.com/apoorvh%20jha"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
