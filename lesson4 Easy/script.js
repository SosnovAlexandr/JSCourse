let budget,
    nameShop,
    oneDay,
    time,
    price





var mainList = {};
var shopGoods = [];
var employers = [];


mainList = {
	oneDay: budget / 30,
	nameShop,
	shopGoods: [],
	employers: [],
	open : false,
	discount: true,
	shopItems: [],
	start: function start (){
	 budget = +prompt('Ваш бюджет ?','');
	 while (isNaN(budget) || budget == '' || budget == null){
       budget = +prompt('Ваш бюджет ?','');
	 }
	 nameShop = prompt('Название Вашего магазина ?','ДонКебаб').toUpperCase();
	 time = 17;
  },
	use: function use(){                             // Дисконтная программа
			price = 100;
		 if (mainList.discount == true){
		 	console.log(price * 0.8);
		 }else{
		 	console.log(price);
		 }
		},
 employ: function emloy(){                              // Найм сотрудников
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
 	},
 chooseGoods: function chooseGoods(){
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
  },
 workTime: function workTime(time){
			if (time < 0) {
				console.log('Такого не может быть');
						} else if(time > 8 && time < 20){
							console.log('Магазин работет');
							mainList.open = true;
									}else if(time < 24){
										console.log('Магазин закрыт');
												}else{
													console.log('Такого не может быть');
												};
  },
 chooseShopItem: function chooseShopItem(){
 	for (let i = 0; i < 1; i++) {
 		  let items = prompt ("Перечислите через зяпятую ваши товары","");
 		  if(items == '') {
 		  	console.log('Нельзя оставлять поле пустым');
 		  	i--;
 					  } else if(items === null){
 					  	console.log('Нельзя делать отмену');
 					  	i--;
 					  				} else if(isNaN(items)){
 					  					mainList.shopItems = items.split(",");
 					  					mainList.shopItems.push(prompt("Подождите ещё ", ""));
 					  					mainList.shopItems.sort();
 					  					mainList.shopItems.unshift("");
 					  					var arr = mainList.shopItems;
 					  					arr.forEach(function(item, i, arr) {
 					  					  alert( 'У нас вы можете купить: ' + i + ": " + item);
 					  					});
 					  					let include = { workers: "5 человек", boss: "1 человек" };
 					  					for (let key in include){
 					  						console.log('Наш магазин включает в себя: ' + ' ' + key + ' ' + include[key]);
 					  					}
 					  				   }else {
 					  				   	console.log('Нельзя вводить числа');
 					  				   	i--;
 					  				   }
 	}
 },
}





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


