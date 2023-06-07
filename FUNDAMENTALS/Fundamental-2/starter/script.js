//                                              FUNDAMENTAL 2

"use strict"; // this activate strict mode to help secure our script. always begin with it
// also helps to avoid using reserved word that can be used in the future.

/*
//                                  DECLARATION FUNCTIONS: 

//Are the real world building blocks of javascript. they are very important.
// functions are piece of code that can re-use over and over again.
//Variable holds value while functions holds one or more complete lines of code

//calling, running, invoking.. the logger there is the function name and its 
 //use to call the function
 //A function can also use data and recieve data

//  function logger() {
//     console.log('My name is Nelson');
//  }

//   logger();

function fruitProcessor (apples, oranges) {
   console.log(apples, oranges)
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice
}

fruitProcessor(5, 0); // data in the parameters are called argument
const appleJuice = fruitProcessor( 5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor( 2, 4);
console.log(appleOrangeJuice);
*/

/*
//                               FUNCTION DECLARATION VS EXPRESSION

//The upper one function we did was called function declaration

//             DECLARATIVE FUNCTION
function calcAge1(birthYear) {
   //return 2037 - birthYear;
   const  age = 2037 - birthYear;
   return age
}

const age1 = calcAge1(1987);
console.log(age1);

//            EXPRESSION FUNCTION
//IS A FUNCTION WITHOUT A NAME
//functions are basically values e.g Boolean, String, Number etc.
const calcAge2 = function (birthYear) {
   return 2037 -birthYear;
}
const age2 = calcAge2( 1991);
console.log(age2);
//you can call function declartation before they are defined in the code but you cant call
//function expressionbefore they are define.
*/

/*
//                                     ARROW FUNCTIONS

//THIS WAS ADDED TO JAVASCRIPT ON ES6. IT IS SHORTER AND FASTER TO WRITE
// THIS ELIMATE TE CURLY BRACES AND EXPLICITLY INVOKE THE RETURN
 
// birthYear => 2037 - birthYear;
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   return `${firstName} retire in ${retirement} years`;
}
console.log(yearsUntilRetirement (1991, 'Nelson'));
console.log(yearsUntilRetirement (1987, 'Dharey'));
*/

/*
//                            FUNCTIONS CALLING OTHER FUNCTIONS

// THIS IS BASICALLY A FUNCTION CALLING ANOTHER FUNCTION.

function cutFruitPieces(fruit) {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangepieces = cutFruitPieces(oranges);
   const juice = `Juice with ${applePieces} pieces of apple and ${orangepieces} pieces of orange`;
   return juice
}

const appPieces = fruitProcessor(2, 3);
console.log(appPieces);
*/

/*
//                            REFRESHING AND REVIEWING FUNCTIONS.

//the line of code after the return statement wont execute because when the return hits
//it then exit the function ignoring the code after it. but if the code is above the reurn it will both
//execute. ( alt + up) to move the code up.

const calAge = function (birthYear) {
   return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
   const age = calAge(birthYear);
   const retirement = 65 - age;

   if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
   } else {
      console.log(`${firstName} has already retired`);
      return -1
   }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Nelson'));

//functions declaration: can be used before its declared in the code.
//function expression: this are functions they can be stored in variable
//function arrow: Great for a quick one-line functions. it takes away curly braces and return it the function.
//This are the three differenct ways of writting functions, but they all work in a similar way,
// they recieve input data, transform data then output data.
*/

/*
//                                     CODE CHALLENGE.

const calcAverage = (score1, score2, score3) => {
   const teamAverage = (score1 + score2 + score3) / 3
   return teamAverage
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas)

function checkWinner (avgDolphins, avgKoalas) {
   if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins wins by (${avgDolphins} vs ${avgKoalas})`);
   } else if (avgKoalas >= 2 * avgDolphins) { //atleast
      console.log(`Koalas wins by (${avgKoalas} vs ${avgDolphins})`);
   } else {
      console.log(`No team wins`);
   }
}
checkWinner(avgDolphins, avgKoalas);

//TEST 2

avgDolphins =  calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
*/

/*
//                                         ARRAYS.
// Are like list in terrraform.
//Arrays are data structure, are like a big containers that we can have variables and later refernce them.
//In javascript the 2 most important data structure are Arrays and Objects

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1987, 2008, 2021) //Another ways of writting arrays called literal syntax
console.log(friends[0]);
console.log(friends.length) // is called property.the length helps to know the number of element in the array
console.log(friends[friends.length - 1]); //this becomes an expression and expression produces a VALUE

friends[3] = 'Jay'; // a way of adding and replacing an element in the array
console.log(friends);
console.log(friends[friends.length - 1])
//Only primitive values are immutable and arrays is not a primitive value, arrays are mutable.

const firstName = "Nelson"
const info = [firstName, 'Enujeke', 2023 - 1987, 'Developer', friends];
console.log(info);

//EXAMPLES

const calcAge = function (birthYear) {
   return 2037 - birthYear;
}
const newYears = [1990, 1967, 2002, 2010, 2018];
calcAge(newYears[2]);
console.log(newYears)

const age1 = calcAge(newYears[0]);
const age2 = calcAge(newYears[1]);
const age3 = calcAge(newYears[newYears.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(newYears[0]), calcAge(newYears[1]), calcAge(newYears[newYears.length - 1])];
console.log(ages)
*/

/*
//                               BASIC ARRAYS OPERATIONS (METHODS).
//METHODS ARE ARRAYS OPERATIONS

const friends = ['Michael', 'Steven', 'Peter'];

//ADDS ELEMENT
friends.push('Dhrey'); // this adds element to the end of the array
console.log(friends)
friends.unshift('Christy'); // this adds element to the beginning of the array
console.log(friends)

//REMOVE ELEMENTS
const pop = friends.pop(); // removes the last element in the array.
console.log(friends)
const shift = friends.shift(); // removes the first element in the array.
console.log(friends);
console.log(pop); // shows the last element removed
console.log(shift) // shows the first element removed

console.log(friends.indexOf('Steven')); // shows the index of an element
console.log(friends.indexOf('Bob'));

//this shows if the element is in the array
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); //false

if (friends.includes('Dhrey')) {
   console.log('You have a friend called Dhrey')
} else {
   console.log('You need to add him as a friend')
}
*/

/*
//          CODE CHALLENGE

const calcTip = function (bill) {
   return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
}
const bills = [123, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

/*
//                                        INTRODUCTION TO OBJECTS

const jonasArray = [
   'Jonas',
   'Schmedtmann',
   2037 - 1991,
   'Teacher',
   ['Michael', 'Peter', 'Steven']
];
//OBJECTS are key value pairs that gives values in an array a name
//Arrays have square bracket [] , while object have curly Bracket {}
// We have curly braces in an IF ELSE STATEMENT, SWITCH STATEMENT AND FUNCTION BODY.

const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   age: 2037 - 1991, //this is an expression because it produces a value
   job: 'Teacher',
   friends: ['Michael', 'Peter', 'Steven']
};

/* Keys are the firstname, lastname, ages etc and are also called properties
Then jonas is the Object. Objects are the most fundamental concept in JavaScript
using the curly braces {} is called the object literal syntax bescause we
litrally writing the entire object, its the most basic way 
of object. we use objects to group together different variables that really belong
togther. in object the order of values does not matter but in array the order matters.
Array for structure data
Object for unstructure data
*/

/*
//                                  DOT VS BRACKET NOTATION

//REMEMBER (KEYS === PROPERTIES)
const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   age: 2037 - 1991, //this is an expression because it produces a value
   job: 'Teacher',
   friends: ['Michael', 'Peter', 'Steven']
};
// console.log(jonas)

// console.log(jonas.lastName); // DOT NOTATION.. we have to specify the property name

// console.log(jonas['lastName']); //BRACKET NOTATION. to concatinate 2 properties together

// // Difference is that the bracket notation can take expression to produce a value
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas ['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// // console.log(jonas.interestedIn) // this will be undefined because interestedIn is not a defined property
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//    console.log(jonas[interestedIn]);
// } else {
//    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }
// Adding Properties to the object 'jonas' using both dot and bracket notation
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)


//CHALLENGE
// show "jonas has 3 friends, and his bestfriend is called michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} firends and his bestfriend is ${jonas.friends[0]}`);
*/

/*
//                                              OBJECT METHODS
// ANY FUNCTION THAT IS ATTACHED TO AN OBJECT IS CALLED A METHOD, M ETHOD ARE PROPERTIES THAT HOLD A 
//FUNCTION VALUE

const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   BirthYear: 1991,
   job: 'Teacher',
   friends: ['Michael', 'Peter', 'Steven'],
   hasDriversLicence: true,

   // calcAge: function (birthYear) {
   //    return 2037 - birthYear;
   // }
   // calcAge: function () {
   //    return 2037 - this.BirthYear
   // }
   calcAge: function () {
      this.age = 2037 - this.BirthYear //this is also use to add age as a new property to the object
      return this.age;
   },

   //CHALLENGE
// "Jonas is a 46 year old teacher, and he has a driver license "
   getsummary: function () {
      return  `${this.firstName} is a ${this.calcAge()}-years old
      ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'}
      driver license.`
   }

}; // REMEMBER WHEN CALLING AN OBJECT USING BRACKET NOTATION THE PARAMETER MUST BE A STRING {Object[' ']}

console.log(jonas.calcAge());
console.log(this);
console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge(1991));
console.log(jonas.getsummary());
*/

/*
//                                         CODE CHALLANGE

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
 
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
 
mark.calcBMI();
john.calcBMI();
 
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

*/

//                                             ITERATION: THE FOR LOOP.

//IF, ELSE STATEMENT are control structure and LOOP are also control structure.
// LOOPS helps to autimate repetitve task

// for loop keeps running while the condition is true.
// the for loop as 3 parts
//1. the initial value of the counter.
//2. logical condition that is evaluated before each iteration of the loop.
//3. The counter variable.

// for (let rep = 1; rep <= 10; rep ++ ) {
//    console.log(`Lifting weights is a repition task ${rep}`)
// }

/*
//                                      LOOPING ARRAYS, BREAKING AND CONTINUING

//MOST USAGE OF FOR LOOPS IS TO LOOP THROUGH ARRAYS. ARRAYS ARE ALSO OBJECTS
const jonas = [
   'Jonas',
   'Schmedtmann',
   2037 - 1991,
   'Teacher',
   ['Michael', 'Peter', 'Steven'],
   true,
];

// for (let i = 0; i < 5 ; i++) { //the logical condition is hard code and not dynamic 
//    console.log(jonas[i]);
// }
//  const types = [];

// for (let i = 0; i < jonas.length; i++) { //the logical condition is dynamically coded 
//    //Reading from Jonas array
//    console.log(jonas[i], typeof jonas[i]);
//    //Filling types array
//    types[i] = typeof jonas[i];
// }
// console.log(types)


// //EXAMPLE II.
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//    ages.push(2037 - years[i]);
// }
// console.log(ages);

//                  CONTINUE AND BREAK

// CONTINUE STATEMENT: Exist the current iteration of the loop and continue to the next one

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) { 
   if(typeof jonas[i] !== 'string') continue; // !== means its not

   console.log(jonas[i], typeof jonas[i]);
}
// BREAK STATEMENT: To complete snd terminate the whole loop

console.log('--- BREAK WITH NUMBERS ---')
for (let i = 0; i < jonas.length; i++) { 
   if(typeof jonas[i] === 'number') break; // !== means its not

   console.log(jonas[i], typeof jonas[i]);
}
*/

/*
//                         LOOPING BACKWARDS AND LOOPS IN LOOPS
//       LOOPING BACKWARDS

const jonas = [
   'Jonas',
   'Schmedtmann',
   2037 - 1991,
   'Teacher',
   ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
   console.log(i, jonas[i]);
}

//          LOOP INSIDE OF A LOOP

for (let excercise = 1; excercise < 4; excercise ++) {
   console.log(`---- Starting excercise ${excercise}`);

   for ( let rep = 1; rep < 6; rep++) {
      console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`)
   }
}
*/

//                              THE WHILE LOOP

// let rep = 1;
// while ( rep <= 10) {
//    console.log(`lifting weights repetion ${rep}`);
//    rep++;
// }
// //All a while loop really needs is the condition dosent really need a counter
// //and counter varaible.

// //Math.randon will create a number between 0 and 1 but multiplying by 6 wil be in a decimal
// //number. Math.trunc will help eliminate the decimal sign
// let dice = Math.trunc(Math.random() * 6 ) + 1;

// while (dice !== 6) {
//    console.log(`You rolled a ${dice}`);
//    dice = Math.trunc(Math.random() * 6 ) + 1;
//    if (dice === 6) console.log('Loop is about to end...')
// }

/*
// CODE CHALLENGE 

 const calcTip = function (bill) {
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }
  
  
 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
 const tips = [];
 const totals = [];
  
 for (let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
 }
  
 console.log(bills, tips, totals);
  
 const calcAverage = function (arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     // sum = sum + arr[i];
     sum += arr[i];
   }
   return sum / arr.length;
 }
  
 console.log(calcAverage([2, 3, 7]));
 console.log(calcAverage(totals));
 console.log(calcAverage(tips));
*/

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;

    return max - min;
  }
};
const amp = calcTempAmp(temperatures);
console.log(amp)
*/
