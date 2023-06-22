'use strict';

//Javascript interaction with a webpage is called DOM Manipulation (DOCUMENT OBJECT MODEL): Structured representation of HTML documents. allows javascript to access HTML element and styles to manipulate them. e.g like to change text, HTML attributes and even css styles. it basically a connection between HTML Document and javascript code

//DOM always start with the Document object right at the very top and document is a special object that we have access into in JS. And it serves at entrypoint into the DOM. DOCUMENTS ARE ENTRYPOINT INTO THE DOM WE NEED IT TO SELECTING ELEMENT TO INTRERACT WITH AND HTML FILE.

//THE FIRST CHILD ELEMENT OF DOCUMENT IS USUALLY THE HTML ELEMENT BECAUSE ITS THE ROOT ELEMENT IN HTML.

//HTML HAS 2 CHILD ELEMENT. <head></head> and <body></body> html are basically JSON
//HTML DOM methods are actions you can perform (on HTML Elements). HTML DOM properties are values (of HTML Elements) that you can set or change.

//DOM Methods And DOM Properties are both Web APIs. they are libraries that browsers implement.

//                           SELECTING AND MANIPULATING ELEMENTS
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//                                  HANDLING CLICK EVENTS.

//Event are something that happens on the page
//Method recieve information by ading (). the braces shows  its a method.

// const x = function () {
//   console.log(document.querySelector('.guess').value);
// };
// const somethingNew = (document.querySelector('.message').textContent =
//   '🎉 Correct Number...');

// document.querySelector('.check').addEventListener('click', x, somethingNew);
//addEventListener is method called with ().. with eventListner method, we first need to pass the type of event and this example is a "Click" follow by the actions that follows.

//then after the event, we need to specify the reaction of the event by defining a function that contains the code that execute when the click event happens and the function is called eventHandler..
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //( ! = negation operator, it turns the false in if statement to true)
    document.querySelector('.message').textContent = ' 🛑 No Number';
  }
});
*/
//                            IMPLEMENTING THE GAME LOGIC AND MANIPULATING CSS
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input value
  if (!guess) {
    //( ! = negation operator, it turns the false in if statement to true)
    document.querySelector('.message').textContent = ' 🛑 No Number';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      // this part here refactor all the "too high and too low code."
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

// CODE CHANLLEMNGE TO RESET/ TRY AGAIN

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//          RE-FACTOR THIS  GAME CODE

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
