'use strict'

const book = document.querySelectorAll('.book'),
      books = document.querySelectorAll('.books'),
      adv = document.getElementsByClassName('adv'),
      heading = document.querySelectorAll('h2'),
      ull = document.querySelectorAll('ul'),
      lii = document.querySelectorAll('li'),
      newElement = document.createElement('li');

     
      console.log(ull);

adv[0].remove();
books[0].prepend(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
books[0].append(book[2]);

document.body.style.backgroundImage = 'url(image/adv.jpg)';

heading[4].innerHTML = '<a>Получится - "Книга 3. this и Прототипы Объектов"</a>';
//--------книга 2 ---------
lii[2].before(lii[3]);
lii[2].before(lii[6]);
lii[2].before(lii[8]);
ull[0].append(lii[2]);
ull[0].append(lii[10]);

//--------книга 5 ---------
lii[54].before(lii[55]);
lii[54].before(lii[51]);
lii[48].before(lii[55]);
lii[50].before(lii[48]);
lii[48].before(lii[50]);

//--------книга 6 ---------
lii[26].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
console.log(lii);
ull[2].append(lii[26]);
