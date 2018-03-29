var num = prompt("Введите число", "");
console.log(eval(num.toString().split('').join('*')));
var numResult = eval(num.toString().split('').join('*'));
var exp = 3;
var newWin = window.open("", "", "width=400,height=400");
newWin.document.write(numResult ** exp);