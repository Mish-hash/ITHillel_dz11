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




