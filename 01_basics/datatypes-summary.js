// primitves datatypes (call by value)

    // 7 types : String, Numbel, Boolean, null, undefined, Symbol, BigInt

const score =100;
const scoreVale = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//symbol
const id= Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false


const bigNumber = 12324249837867327889089747836478930279684783289009782738728783278n;



// Reference Type (non primitive) (call by reference)
    // Arrays, Objects, Functions

    const heros = ["Shaktiman", "naagraj", "doga"];
    const obj = {
        name: "Jatin",
        age: 25
    };




const myFunc = function(){
    console.log("hello world");
};
