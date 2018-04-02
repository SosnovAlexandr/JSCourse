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
console.log(btns[4]);

//Ввод продуктов, времени и расчета бюджета
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

//Блок с промокодом
let promoBudgetInput = document.querySelector('.promo-budget-value');
console.log(promoBudgetInput);

let budget,
    oneDay,
    price


//Начинаем писать скрипт магазина


//Открываем магазин
btn.addEventListener('click', () => {
   	 budget = +prompt('Ваш бюджет ?','');
   	 while (isNaN(budget) || budget == '' || budget == null){
          budget = +prompt('Ваш бюджет ?','');
   	 }
   	 budgetRight[0].textContent = budget;
   	 nameRight[0].textContent = prompt('Название Вашего магазина ?','BubbleTea').toUpperCase();
});
//Ввод категории товаров
btns[1].addEventListener('click', () => {
     for (let i = 0; i < goodsBlock.length; i++) {
     	  let a = goodsBlock[i].value;
            if(a === null){
     				  	console.log('Нельзя делать отмену');
     				  	i--;
     				  				} else {
     				  					mainList.shopGoods[i] = a;
     				  					goodsRight[0].textContent = mainList.shopGoods;
     				  				}
     }
});
//Поле ввода продуктов через запятую
productsInput.addEventListener('change', () =>{
  	  let items = productsInput.value;
  				  			if(isNaN(items) && items != ''){
  				  					mainList.shopItems = items.split(",");
  				  					mainList.shopItems.sort();
  				  					itemsRight[0].textContent = mainList.shopItems;
  				  		}
});
//Закрыт/открыт магазин
timeInput.addEventListener('change', () =>{
    let time = timeInput.value;
    if (time < 0) {
    	console.log('Такого не может быть');
    	mainList.open = false;
    			} else if(time > 8 && time < 20){
    				console.log('Магазин работет');
    				mainList.open = true;
    						}else if(time < 24){
    							console.log('Магазин закрыт');
    							mainList.open = false;
    									}else{
    										console.log('Такого не может быть');
    										mainList.open = false;
    									};
     if (mainList.open == true) {
     	isopenRight[0].style.backgroundColor = 'rgba(7, 94, 20, 0.5)';
     }else {
     	isopenRight[0].style.backgroundColor = 'rgba(94, 7, 7, 0.5)';
     }
});
//Кнопка дневного бюджета
btns[2].addEventListener('click', () => {
  countBudgetInput.value = budget / 30;
});
//Найм сотрудников 
btns[3].addEventListener('click', () => {
	for (let i = 0; i < hireEmployersInput.length; i++) {
								  let b = hireEmployersInput[i].value;
										mainList.employers[i] = b;
										employersRight[0].textContent += mainList.employers[i] + ', ';
											 	}
});
//Дисконтная система
btns[4].addEventListener('click', () => {
  let discount = promoBudgetInput.value;
  if(discount == 'скидка'){
     let newDiscount = budget * 0.8;
     discountRight[0].textContent = newDiscount;
     discountRight[0].style.backgroundColor = 'rgba(7, 94, 20, 0.5)';
  }else{
  	discountRight[0].textContent = 'У вас нету скидки';
  	discountRight[0].style.backgroundColor = 'rgba(94, 7, 7, 0.5)';
  }

 // discountRight[0].textContent = discount;
});

var mainList = {};
var shopGoods = [];
var employers = [];


mainList = {
	shopGoods: [],
	employers: [],
	open : false,
	discount: true,
	shopItems: [],
	use: function use(){                             // Дисконтная программа

}
}




console.log(mainList);


