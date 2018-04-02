let subMenu = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu'),
    nav = document.querySelectorAll('.menu-item'),
    oneNav = document.querySelector('.menu-item'),
    spam = document.getElementsByClassName('adv');

console.log(subMenu[1]);
console.log(menu[0]);
console.log(nav[2]);
console.log(oneNav);
console.log(spam);


document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
title.innerHTML = 'Мы продаем только подлинную технику Apple';
spam[0].remove();

menu[0].insertBefore(subMenu[2], subMenu[1]);

var newLi = document.createElement('li');
newLi.innerHTML = 'Пятый пункт';
newLi.className = "menu-item";
menu[0].appendChild(newLi);

let atit = prompt('Ваше отношение к техника Apple', '');
let textArea = document.getElementById('prompt');
textArea.innerHTML = atit;
console.log(textArea);


