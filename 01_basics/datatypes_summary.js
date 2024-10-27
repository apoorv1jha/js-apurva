// primitve

// 7 types : string, boolean, number, bigint, undefined, null, symbol

const score = 100
const scoreValue = 130.9

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId );


// BigInt = 1236374395793285793575n


// Refrence(Non-primitive)

//array, objects, functions

const heroes = ['shaktiman','ironman','thor'];
let myObj = {
    name : "apurva",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) and Heap(non-primitive)

let myName = "Apurva jha"

let anotherName = myName
anotherName = "SonuJha"

console.log(myName);
console.log(anotherName);

  
// stack aur heap me jo difference hai wo dekha jai toh stack me humlog data ko copy krte hai and heap me data hi orginally rehta hai means ki 2 variable ka ek hi result hoga but stack me
//jo purana define hai wo hamesha define rahega


 let userOne = {
    email :" jha77apurva@gmail.com" ,
    upi : "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "jha.santosh684@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);