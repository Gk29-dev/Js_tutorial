//  Datatype conversion in javascript

let score = "33"; //Convert this value in number

// console.log(typeof score); //string

let convertValueInNumber = Number(score);
// console.log(typeof convertValueInNumber); //number

//Suppose we have a string which contains some numbers and alphabets as well convert that into number
let userScore = "32abc";
let convertUserScoreInNumber = Number(userScore);
// console.log(typeof convertUserScoreInNumber); //number
// console.log(convertUserScoreInNumber); //NaN
/* 
So, Javascript convert the above variable value into number but 
when we tries to print the value it return the NaN because alphabets cannot convert into number
*/

//Same as convert number into string
let phoneNumber = +91123456789;
// console.log(typeof phoneNumber); //number

let convertValueInString = String(phoneNumber);
// console.log(convertValueInString); //91123456789
// console.log(typeof convertValueInString); //string

//Boolean
let isLoggedIn = 1;
let convertInBoolean = Boolean(isLoggedIn);
// console.log(typeof convertInBoolean); //boolean
// console.log(convertInBoolean); //true

// 1 => true; 0 => false
// "gaurav" => true; "" => false

// **********Operations**********

// console.log(2 + 2); //4
// console.log(2 - 2); //0
// console.log(2 * 2); //4
// console.log(2 / 2); //1
// console.log(2 ** 3); //8; 3 is the power of 2
// console.log(2 % 3); //2

let firstName = "Gaurav";
let lastName = " Kumar";
let fullName = firstName + lastName;
console.log(fullName); //Gaurav Kumar

//prefix and postfix in increments
let x = 5;
let y = x++; //postfix
console.log(`x: ${x} and y: ${y}`);
/* 
postfix :
assign the value and then increment

prefix:
first increment the value and then assign 
*/

let a = 10;
let b = ++a;
console.log(`a: ${a} and b: ${b}`);
// a => 11; b => 11
