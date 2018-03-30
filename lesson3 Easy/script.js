let budget,
    nameShop,
    oneDay,
    time,
    price

function start (){
	 budget = +prompt('Ваш бюджет ?','');
	 while (isNaN(budget) || budget == '' || budget == null){
       budget = +prompt('Ваш бюджет ?','');
	 }
	 nameShop = prompt('Название Вашего магазина ?','ДонКебаб').toUpperCase();
	 time = 17;
}
// start ();




var mainList = {};
var shopGoods = [];
var employers = [];


mainList = {
	oneDay: budget / 30,
	nameShop,
	shopGoods: [],
	employers: [],
	open : true,
	discount: true
}

// Дисконтная программа
function use(){
			price = 100;
		 if (mainList.discount == true){
		 	console.log(price * 0.8);
		 }else{
		 	console.log(price);
		 }
		};
use();


// Найм сотрудников
function emloy(){
	for (let i = 1; i < 5; i++) {
								  let b = prompt('Введите имя сотрудника');
								  if(b == '') {
								  	console.log('Нельзя оставлять поле пустым');
								  	i--;
											  } else if(b === null){
											  	console.log('Нельзя делать отмену');
											  	i--;
											  				} else {
											  					mainList.employers[i] = b;
											  				}
							}
	}
emloy();

function chooseGoods(){
						for (let i = 0; i < 3; i++) {
							  let a = prompt('Какой тип товаров будем продавать?');
							  if(a == '') {
							  	console.log('Нельзя оставлять поле пустым');
							  	i--;
										  } else if(a === null){
										  	console.log('Нельзя делать отмену');
										  	i--;
										  				} else {
										  					mainList.shopGoods[i] = a;
										  				}
						}
}
// chooseGoods();


function workTime(time){
			if (time < 0) {
				console.log('Такого не может быть');
						} else if(time > 8 && time < 20){
							console.log('Магазин работет');
									}else if(time < 24){
										console.log('Магазин закрыт');
												}else{
													console.log('Такого не может быть');
												};
}
// workTime(14);



console.log(mainList);



// !!!!!!!!!!!!!
// Не понимаю как можно запустить цикл заново, если условие не соблюлось
// !!!!!!!!!!!!!

// let i = 0;
// let a = prompt('Какой тип товаров будем продавать?');
// while (i < 1) {
// 		  if(a == '') {
// 		  	console.log('Нельзя оставлять поле пустым');
// 		  	i++;
// 		  				  } else if(a === null){
// 		  				  	console.log('Нельзя делать отмену');
// 		  				  	i++;
// 		  				  				} else {
// 		  				  					mainList.shopGoods[i] = a;
// 		  				  					i++;
// 		  				  				}
// }


// let i = 0;
// let a = prompt('Какой тип товаров будем продавать?');
// do{
// 	if(a == '') {
// 		  	console.log('Нельзя оставлять поле пустым');
// 		  	i++;
// 		  				  } else if(a === null){
// 		  				  	console.log('Нельзя делать отмену');
// 		  				  	i++;
// 		  				  				} else {
// 		  				  					mainList.shopGoods[i] = a;
// 		  				  					i++;
// 		  				  				}
// }
// while (i < 1)


