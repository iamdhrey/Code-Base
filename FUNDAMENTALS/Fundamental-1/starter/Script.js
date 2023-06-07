//                                                  FUNDAMENTAL 1

// let js = 'Amazing';
// if (js === 'Amazing') alert('Javascript Is Fun!');

// 40 + 3 + 26 - 45;
// console.log(40 + 3 + 26 - 45);

/*
//                                          VALUES AND VARAIBLES: VALUE Is a piece of data

console.log('Jonas')

let firstName = "Drey";
console.log(firstName);

accepted varaible convention.
firstNamePerson
first_name_person.... new and function are reserved words that you cant use as varaible except you use _ and $

let person = "Drey";
let PI = 3.98; // Use for constant value that wont change

let myFirstJob = 'Teacher';
let myCurrentJob = "SRE";
console.log(myCurrentJob);
*/

/*
                    Practice

let  country = "Nigeria";
let continent = "Africa";
let population = 5000000;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
//                                              DATA TYPES.

let nortal = true;
console.log(typeof true);
console.log(typeof "Drey");
console.log(typeof 98);

// to assign a variable that is already used to another value
let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!"; // to reassign a variable to another value remove the let
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year)
*/

/*
//                                       LET, VAR, CONST
Let and Const are modern and Var is old javascript

let age = 30;
age = 31; // this is perfecr because let can mumtate value

const birthYear = 1987;
birthYear = 1991; // this is not allowed

const job; // not allowed a value has to be defined.

var firstName = 'Drey';
firstName = "Nelson";
*/

/*
//                                              OPERATORS IN JS
//               MATH OPERATORS

const future = 2030
const ageNelson = future - 1987;
console.log(ageNelson);
const ageChristy = future - 1991;
console.log(ageNelson, ageChristy);

console.log(ageChristy * 2, ageNelson / 10, 2 ** 3)

const firstName = "Nelson";
const lastName = 'Enujeke';
console.log(firstName, lastName);
console.log(firstName + ' ' + lastName);

//typeof operator

//              Assignment Operator
let x = 10 + 5 // x = 15
console.log(x);

x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//comparsion operator:  they produce a boolean data type
console.log(ageNelson > ageChristy);
console.log(ageChristy === ageNelson);
console.log(ageChristy < ageNelson);
console.log(ageChristy >= ageNelson);
console.log(ageChristy <= ageNelson);

const isFullAge = ageChristy >= 45;
console.log(isFullAge);

console.log(future - 2023 > ageNelson)
*/

/*
//                                          OPERATOR PRECEDENCE

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//google mdn( mozilla developer network) mdn operator precedence

let x, y;
x = y = 24 - 10 - 5; // x = y = 9
console.log(x, y);
 
const averageAge = (ageJonas+ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
//                  CODING CHALLANGE #1

const marksWeight = 78;
const marksHeight = 1.69;
const john_weight = 92;
const john_height = 1.95;

const BMIMark =  marksWeight / marksHeight ** 2;
const BMIJohn = john_weight / john_height ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI );
*/

/*
//                                      STRINGS AND TEMPLATE LITERALS.

const firstName = "Nelson";
const job = "SRE";
const birthYear = 1987;
const future = 2037

const nelson = " i'm " + firstName + " , a " + (future - birthYear) + " years old " + job + "!";
console.log(nelson);

//                      TEMPLATES LITERALS
const nelsonNew = `I'm ${firstName}, a ${future - birthYear} year old ${job}`;
console.log(nelsonNew);

//                      MULTI-LINE STRINGS

console.log('string with \n\
miltiple \n\
line');

console.log(`string
with
line
comment`)
*/

/*
//                                          IF / ELSE STATEMENT.

const age = 15;
// const isOldEnough = age >= 18;
if(age >= 18) {
    console.log("Sarah can now start driving🚘")
} else {
    const yearsLeft = 18 -age;
    console.log(`Sarah is too young. wait another  ${yearsLeft} years 😊`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
//                      CODE CHALLENGE #2
const marksWeight = 78;
const marksHeight = 1.69;
const john_weight = 92;
const john_height = 1.95;

const BMIMark =  marksWeight / marksHeight ** 2;
const BMIJohn = john_weight / john_height ** 2;
const markHigherBMI = BMIMark > BMIJohn;

if(BMIMark > BMIJohn) {
    console.log(`Mark BMI ${BMIMark} is higher than John BMI ${BMIJohn}`);
} else {
    console.log(`John BMI is higher`);
}

if(BMIJohn > BMIMark) {
    console.log(`John BMI is higher`);
} else {
    console.log(`Mark BMI is higher`);
}

*/

/*
//                              TYPE CONVERSION AND COERCION  Strings, Number and Boolean
//type conversion is manually changing value types

const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18)

console.log(String(23), 24);
console.log(Number('Nelson'));


//Type Coercion is javascript changing value types automatically.

console.log("I'm " + 23 + ' years old');
console.log('23' - '10' - 3); // the minus sign do the opposite by actally minusing it
console.log('23' + '10' + 3); //the plus sign concatinate it all
console.log('23' / '2');
console.log('23' * '2');

let n = '1' + 1; //this concatinate and makes it 11
n =n - 1;
console.log(n); //10

console.log(50 - 20- 10 + '5'); // 205
console.log('10' - '4' - '3' +'5');
*/

/*

//                                      TRUTHY AND FALSY VALUES
// FALSY VALUES Are values that are not truely false but will becomes false when 
//converting to boolaean
//there are 5 falsy values: 0, ' ', undefined, null, NaN.

//TRUTHY VALUES.
// values that will be converted to true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); //the curly braces is an object
// any string that is not an empty string is a truthy value

const money = 0;
if(money) {
    console.log("Don't spend it all :)");
} else {
    console.log('you need to get a job');
}

let height;
if (height) {
    console.log('YAY! Height id defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
//                                  EQUALITY OPERATORS == VS ===
// === : THIS IS CALLED THE STRICT EQUALITY OPERATOR, 
//VALUES MUST BE THE EXACT SAME ( TRUE).

// == : THIS IS CALLED THE LOOSE OPERATOR, IT DOES TYPE COERCION.
//  let n = 18 === 18;
//  console.log(Boolean(18));
//  18 === 19; false
// '18' == 18; true
// '18' === 18; false

//  if (age === 18) console.log('You just became an adult (strict)');

//  if (age == 18) console.log('You just became an adult (loose)');

//  const age = '18';
//  if (age === 18) console.log('You just became an adult (strict)');

//  if (age == 18) console.log('You just became an adult (loose)');
//  // for clean code avoid loose equality and focus on more strict equality

//Getting values from any webpage by using Prompt function.

// const favourite = prompt("Whats yoyr favourite number?");
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite == 23) { //23 from pervious line is a string, "23" == 23
//     console.log('Cool! 23 is an Amazing Number!');
// }

// const favourite = Number(prompt("Whats yoyr favourite number?")); //Number changes the typeof the favourite variable
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) { // 23 === 23
//     console.log('Cool! 23 is an Amazing Number!');
// }
//                              ELSE IF STATEMENT

const favourite = Number(prompt("Whats yoyr favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log('Cool! 23 is an Amazing Number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23') //!== is the same === strict equality
//and != is the same the == loose equality
*/

/*
//                                              BOOLEAN LOGIC.

//Boolean uses true or false to solve logical problems
// "AND", "OR" and "NOT"
//AND OPERATOR = TRUE WHEN ALL ARE TRUE '&&'
//OR OPERATOR = TRUE WHEN ONE IS TRUE '||'
//NOT OPERATOR = INVERT TRUE/FASLE VALUE '!'
*/

/*
//                                           LOGICAL OPERATORS
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// console.log(hasDriversLicense && hasGoodVision); // True

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B
// console.log(hasDriversLicense && hasGoodVision); //False
// console.log(hasDriversLicense || hasGoodVision); //True
// console.log(!hasDriversLicense); //False

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah should drive!');
// } else {
//     console.log('Someone else should drive ...');    
// }

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = false; // C

if (hasDriversLicense && hasGoodVision || !isTired) { // True
    console.log('Sarah should drive!');
} else {
    console.log('Someone else should drive ...');    
}
*/

/*
//                                          CODE CHALLENGE
// const teamOne = 'Dolphins';
// const teamTwo = 'Kaolas';

// const dolphins = (96 + 108 + 101 / 2);
// const kaolas = (88 + 91 + 110 / 2);
// console.log(dolphins);
// console.log(kaolas);
// if (dolphins > kaolas) {
//     console.log("Dolphins wins the trophy :)");
// } else if (dolphins = kaolas) {
//     console.log("There should be a rematch") 
//     } else {
//         console.log("Kaolas wins the trophy");
// }

//          BONUS 1 and 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKaolas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKaolas);

if (scoreDolphins > scoreKaolas && scoreDolphins >= 100) {
    console.log("Dolphins wins the trophy :)");
} else if (scoreKaolas > scoreDolphins && scoreKaolas >= 100) {
    console.log("Kaolas win the trophy");
} else if (scoreDolphins === scoreKaolas && scoreDolphins >= 100 && scoreKaolas >= 100 ) {
    console.log("Both wins the trophy");
} else {
    console.log("No one wins the trophy ")
}
*/

/*
//                                              THE SWITCH STATEMENT
//IS AN ALTERNATIVE WAY OF WRITING IF ELSE STATEMENT
const day = 'friday';
switch (day) {
    case 'monday': // day === "monday"
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:  //more like an else statement
        console.log('Not a valid day');
}

//              example

if (day === 'monday') {
    console.log('Plan course structure', 'Go to coding meetup');
} else if (day === "tuesday") {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}
*/


/*
//                                      STATEMENT AND EXPRESSION.

// EXPREESION IS A PIECE OF CODE THAT PRODUCES A VALUE, 3 + 4 is an expression to
// produce a value
// STATEMENT IS A PIECE OF CODE EXECUTED BUT DOES NOT PRODUCE A VALUE.
//Whenever something ends with ;, then its a statement. in template literals we can
//only use expressions not statment
*/


/*
//28.                                   THE CONDITIONAL(TERNARY) OPERATOR

//WORKS MORE LIKE THE IF ELSE STATEMENT AND THE SWITCH (CASE) BUT ALL IN ONE LINE
//windows + . to get smiley
const age = 23;
// age >= 18 ? console.log('i like to drink wine🍷') : 
// console.log('i like to drink water💧');
// ? = IF
// : = ELSE

//example. a better way to write it
const drink = age >= 18 ? 'Wine 🍷' : 'water 💧';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'Wine 🍷'
} else {
    drink2 = 'water 💧'
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'Wine 🍷' : 'water 💧'}`);
*/

/*
//                                      CODING CHALLENGE
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/