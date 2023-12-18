const accountId = 144553;
// accountId = 2;  not allowed assignment to constant variables


let accountState; // undefined
let accountEmail="jatin.jain@gmail.com"; // scope level

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
var accountPassword = '12345'; // without scope


accountCity = 'Jaipur'; // not prefered 




accountEmail= "jatin"
accountPassword="123"
accountCity="sagar"



console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
