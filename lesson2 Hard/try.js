var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
var br = '<br/>';
var b = '<b>';
var i = '<i>';
var ic = '</i>';




document.write(week[0], br);
document.write(week[1], br);
document.write(week[2], br, i);
document.write(week[3], br, ic);
document.write(week[4], br, b);
document.write(week[5], br);
document.write(week[6], br);








for (let i = 0; i < 7; i++) {
	  let a = prompt('Введите число');
	  if(('' + a).split('').reverse().join('') % 10 == 7) {
	  	console.log(a);
				  } else if(('' + a).split('').reverse().join('') % 10 == 3) 
				  	console.log(a);
				  				} 





// var arr = ["32132", "534534", "4324324", "4324234", "121321", "75235", "432423432"];
//   if (('' + arr[5]).split('').reverse().join('') % 10 == 7) {
//       console.log(arr[5]);
//   }else{
//       console.log("нет");
//   }


// num = 217111147;
//   if (num % 10 == 7) {
//       console.log("является");
//   }else{
//       console.log("нет");
//   }



// var a = 712345;
//   if (('' + a).split('').reverse().join('') % 10 == 7) {
//       console.log(a);
//   }else{
//       console.log("нет");
//   }
