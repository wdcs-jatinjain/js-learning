let score = "33";
 console.log(typeof score);
 console.log(typeof (score));

 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber);



 let score1 = "33aaa";
 console.log(typeof score);
 console.log(typeof (score));

 let valueInNumber1 = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber); // NaN



 let score2 = null;
 console.log(typeof score);
 console.log(typeof (score));

 let valueInNumber2 = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber); // 0



 let score3 = undefined;
 console.log(typeof score);
 console.log(typeof (score));

 let valueInNumber3 = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber); // NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true


let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn1); // true

 /*
 "33" => 33
 "33acc" => NaN
 true => 0
 */



//  ******************************************************Operations*******************************************



let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion