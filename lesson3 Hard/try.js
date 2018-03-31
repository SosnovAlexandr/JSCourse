var str = 'урок-3-был слишком легким';
console.log (str.charAt(0).toUpperCase() + str.substr(1));
console.log (str.replace(/[-]/g, ' '));
console.log (easy = str.replace(/урок-3-был слишком/g, ''));
console.log (easy.replace(/им/g, 'о'));



var arr =  [20, 33, 1, 'человек', 2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
});
  for(var i=0; i<positiveArr.length; i++){
  var arrUp = Math.pow(positiveArr[i],3);
  console.log(arrUp);

 }




