var budget = +prompt('Ваш бюджет ?','');
var nameShop = prompt('Название Вашего магазина ?','ДонКебаб');
var shopGoods1 = prompt('Какой тип товаров будем продавать?','Шаверма');
var shopGoods2 = prompt('Какой тип товаров будем продавать?','Хачапури');
var shopGoods3 = prompt('Какой тип товаров будем продавать?','Суп из чечевицы');
var oneDay = budget / 30;
var newWindow = window.open("", "", "width=400,height=400");
newWindow.document.write('Ваш бюджет на один день:', oneDay, 'Название Вашего магазина:', nameShop, 'Остальное можно увидеть в консоли');

// console.log(budget);
// console.log(nameShop);
// console.log(budget / 30);



var mainList = {};
var shopGoods = [shopGoods1, shopGoods2, shopGoods3];
var employers = {};

employers = {
	employer1: "Кассир",
	employer2: "Директор",
	employer3: "Грузчик",
}


mainList = {
	oneDay,
	nameShop,
	shopGoods,
	employers,
	newWindow 
}

console.log(mainList);
// console.log(mainList.budget);
// console.log(shopGoods[0]);
// console.log(shopGoods[2]);
// console.log(mainList.shopGoods[1]);
// console.log(mainList.employers.employer2);
