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


// for (let i = 0; i < 3; i++) {
// 	  let a = prompt('Какой тип товаров будем продавать?');
// 	  if(a == '') {
// 	  	console.log('Нельзя оставлять поле пустым');
// 	  	i--;
// 				  } else if(a === null){
// 				  	console.log('Нельзя делать отмену');
// 				  	i--;
// 				  				} else {
// 				  					mainList.shopGoods[i] = a;
// 				  				}
// }


// let time = 17;
// if (time < 0) {
// 	console.log('Такого не может быть');
// 			} else if(time > 8 && time < 20){
// 				console.log('Магазин работет');
// 						}else if(time < 24){
// 							console.log('Магазин закрыт');
// 									}else{
// 										console.log('Такого не может быть');
// 									};


// !!!!!!!!!!!!!
// Не понимаю как можно запустить цикл заново, если условие не соблюлось
// !!!!!!!!!!!!!



// let i = 0;
// while (i < 3) {
// 	let a = prompt('Какой тип товаров будем продавать?');
// 	   i++;
// 		  if(a == '') {
// 		  	console.log('Нельзя оставлять поле пустым');
// 		  	i--;
// 		  				  } else if(a === null){
// 		  				  	console.log('Нельзя делать отмену');
// 		  				  	i--;
// 		  				  				} else {
// 		  				  					mainList.shopGoods[i] = a;
// 		  				  				}
// }


let i = 0;
do{
	let a = prompt('Какой тип товаров будем продавать?');
	i++;
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
while (i < 3)

console.log(mainList);
