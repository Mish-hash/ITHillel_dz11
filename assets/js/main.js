/*
1) Напишите функцию, которая изменяет фоновый цвет текста последнего параграфа в блоке

<body>, а так же функцию, которая меняет блоки footer и main местами.

_

HTML-файл должен быть со следующей структурой в секции <body> :

<div id="wrapper">
  <div id="footer">
    <h1>Footer</h1>
  </div>
  <div id="main">
    <p>I am first paragraph</p>
    <p>I am second paragraph</p>
    <p>I am last paragraph</p>
  </div>
</div>

*/

function reverceNodes () {
    const footerNOde = document.getElementById('footer');
    const mainNode = document.getElementById('main');
    document.getElementById('footer').remove();
    document.getElementById('main').remove();
    document.getElementById('wrapper').append(mainNode);
    document.getElementById('wrapper').append(footerNOde);
};

function chengePColor(){
    const paragraph = document.getElementById('main').lastElementChild;
    paragraph.style.background = paragraph.style.background === '' ? 'red' : '';
};

document.getElementById('reverseButton').addEventListener('click', reverceNodes);
document.getElementById('chengeColorButton').addEventListener('click', chengePColor);


/*
2) Напишитк код реализующий логику светофора

<div id="streetlight">
  <div></div>
  <div></div>
  <div></div>
</div>

Каждый div это свет, должны быть круглые и меть свет как светофор каждые 3и секунды

*/

const streetlightRed = document.body.getElementsByClassName('light red')[0];
const streetlightYellow = document.body.getElementsByClassName('light yellow')[0];
const streetlightGreen = document.body.getElementsByClassName('light green')[0];

setTimeout(function chengeStreetlight() {
    if(streetlightRed.classList.contains('active') && !streetlightYellow.classList.contains('active')){

        streetlightYellow.classList.add('active');

    }else if (streetlightYellow.classList.contains('active') && streetlightRed.classList.contains('active')) {

        streetlightYellow.classList.remove('active');
        streetlightRed.classList.remove('active');
        streetlightGreen.classList.add('active');

    }else if (streetlightGreen.classList.contains('active')) {

        streetlightGreen.classList.remove('active');
        streetlightYellow.classList.add('active');

    }else if (streetlightYellow.classList.contains('active')) {

        streetlightYellow.classList.remove('active');
        streetlightRed.classList.add('active');

    }

    setTimeout(chengeStreetlight, 3000)

}, 3000);


/*
3) Дан массив array = [[1,2,3],[4,5,6],[7,8,9]];
написать функцию которая посторит из него таблицу при помощи цикла и добавления элементов в DOM

<table> - https://www.w3schools.com/html/html_tables.asp
*/

const arraTable = [[1,2,3],[4,5,6],[7,8,9]];

const table = document.createElement('table');
table.classList.add('table');

arraTable.forEach((elem)=>{
  let row = document.createElement('tr');

  elem.forEach(el => {
    const td = document.createElement('td');
    td.innerText += el;
    row.insertAdjacentElement('beforeend', td);
  });

  table.insertAdjacentElement('beforeend', row);
})

document.getElementById('app').insertAdjacentElement('beforeend', table);

