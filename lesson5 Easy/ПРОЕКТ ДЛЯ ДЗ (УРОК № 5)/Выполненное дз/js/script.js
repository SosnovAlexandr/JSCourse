//Кнопка 

let btn = document.getElementById('open-btn');
console.log(btn);

//Левый блок
let nameLeft = document.getElementsByClassName('name'),
				nameRight = document.getElementsByClassName('name-value'),
				budgetLeft = document.getElementsByClassName('budget'),
				budgetRight = document.getElementsByClassName('budget-value'),
				goodsLeft = document.getElementsByClassName('goods'),
				goodsRight = document.getElementsByClassName('goods-value'),
				itemsLeft = document.getElementsByClassName('items'),
				itemsRight = document.getElementsByClassName('items-value'),
				employersLeft = document.getElementsByClassName('employers'),
				employersRight = document.getElementsByClassName('employers-value'),
				discountLeft = document.getElementsByClassName('discount'),
				discountRight = document.getElementsByClassName('discount-value'),
				isopenLeft = document.getElementsByClassName('isopen'),
				isopenRight = document.getElementsByClassName('isopen-value');

console.log(nameLeft);
console.log(nameRight);
console.log(budgetLeft);
console.log(budgetRight);
console.log(goodsLeft);
console.log(goodsRight);
console.log(itemsLeft);
console.log(itemsRight);
console.log(employersLeft);
console.log(employersRight);
console.log(discountLeft);
console.log(discountRight);
console.log(isopenLeft);
console.log(isopenRight);

//Товары
let goodsBlock = document.getElementsByClassName('goods-item');
console.log(goodsBlock[0]);
console.log(goodsBlock[1]);
console.log(goodsBlock[2]);
console.log(goodsBlock[3]);

//Все 3 кнопки по тэгу btn
let btns = document.getElementsByTagName('button');
console.log(btns[1]);
console.log(btns[2]);
console.log(btns[3]);

//Ввода продуктов, времени и расчета бюджета
let productsInput = document.querySelector('.choose-item');
console.log(productsInput);
let timeInput = document.querySelector('.time-value');
console.log(timeInput);
let countBudgetInput = document.querySelector('.count-budget-value');
console.log(countBudgetInput);

//Поля имен сотрудников
let hireEmployersInput = document.querySelectorAll('.hire-employers-item');
console.log(hireEmployersInput[0]);
console.log(hireEmployersInput[1]);
console.log(hireEmployersInput[2]);




