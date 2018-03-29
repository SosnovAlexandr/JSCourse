var budget = +prompt('Ваш бюджет ?','');
var nameShop = prompt('Название Вашего магазина ?','ДонКебаб');
var oneDay = budget / 30;


var mainList = {};
var shopGoods = [];
var employers = {};

employers = {
	employer1: "Кассир",
	employer2: "Директор",
	employer3: "Грузчик",
}


mainList = {
	oneDay: budget / 30,
	nameShop,
	shopGoods: [],
	employers,
	open : false,
}


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

console.log(mainList);
