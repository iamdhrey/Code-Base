// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

Prettier: is an opinonated code formater, it make assumptions about how good code
should look like  it makes code cleanser 
1. install prettier
2. set it as default formater go to settings > search default formater > set prettier
3. settings > formaton > check the box.

4. setup prettier to change some API rules by creating a (.prettierrc files)
5. start with curly braces and define your changes in it

USER SNIPPETS 
Help to automate something boring that you repeatedly do.
settings > user snippet > new global snippet and name it any name
*/

/*
NodeJS is a javascript runtime. helps to run javascript outside of the browser and also
developemnt tools like liveserver 

npm is NODE PACKAGE MANAGER for downloading tools
*/

//                                          LEARN HOW TO CODE
/*
1. Have a clear goal  and understand how a code work
2. dont lose motivation.
3. dont learn in isolation.
4. do lot os code challenge
5. dont alwats code, type it
6. share learning process #100daysofcode, #codenewbiw, #webdev

*/

// THINK LIKE A DEVELOPER

/* WHENEVER THERE IS A PROBLEM, DONT
jumps at the problem without much thinking
implements his solution in an unstructured way
gets stressed out when things don’t work
Be too proud to research solutions

FIX
👍 Stay calm and slow down, don’t just jump at a problem without a plan
👍 Take a very logical and rational approach (programming is just logic, in the end…)
👍 Use my 4-step framework to solve any problem

1. understand the problem.
2. Divide and conquer. take big problem and break them down to small problems
3. dont be afraid to research problem. use google, stackoverflow, mdn web docs
4. for bigger problem, write pseudo code before writting actual code
meaning wright a humman readable code before you code.
5. develop curiousity on how things work.
*/

//                                                  DEBUGGING.
/*
BUG: Is a defect or problem in a computer program. it an unexpected or unintended behaviour in a computer program.
DEBUGGING: is finding and fixing a problem

PROCESS
1. Identify the bug with automated test
2. find the bug with debugger software
3. correct the bug once found
4. prevent reoccurence
*/

// USING A DEBUGGER IN THE BROWSER
/*
Go to sources > script and look for the code script snf pin down the point of execution.(breakpoint) meaning when the code runs, it will stop at that execution point.

*/

//EXAMPLE OF FINDING A BUG.

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degress Celsius')), // prompt will always produce a string
//   };

//   console.log(measurement);
//   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// CODE CHALLENGE

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const arr = data1.concat(data2);

// const printForcast = function (arr) {
//   return (arr = `Will print ${arr[0]} in 1 day... ${arr[1]} in 2days ... ${arr[2]} in 3 days `);
// };
// console.log(printForcast(arr));

//OR

// const printForcast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]} in ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// };
// printForcast(data1);

/* PROBLEM SOLVING FRAMEWORK 
1. Understand the problem
i. Array transform to string seperated by 3 dots
ii. what is the x days? answer : index + 1

2. Breaking up into sub problem
i. transform array into string
ii. transform each element to string
iii. strings needs to contain day (index + 1)
iv. add ... between element at the start and end of string
*/
