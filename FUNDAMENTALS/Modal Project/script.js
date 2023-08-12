'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Use .querySelectorAll if the bottons are more than 1

console.log(btnOpenModal);

// for (let i = 0; i < btnOpenModal.length; i++) {
//     console.log(btnOpenModal[i].textContent);
//   }

//for forLoop and ifElse statement you can ignore the block {} if its just one line of code.

//                              WORKING WITH CLASSES
// working with manipulating classes.

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden'); //Aside remove we can also have check. add etc
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
