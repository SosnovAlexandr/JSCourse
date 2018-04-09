var str = 'урок-3-был слишком легким';
console.log (str.charAt(0).toUpperCase() + str.substr(1));
console.log (str.replace(/[-]/g, ' '));
console.log (easy = str.replace(/урок-3-был слишком/g, ''));
console.log (easy.replace(/им/g, 'о'));



var arr =  [20, 33, 1, 'человек', 2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
});
var b = [];
var length = positiveArr.length;
var num;
for(var i = 0; i < length; i++){
    num = positiveArr[i];
    if(num != null){
        b.push(num * num * num);
    }
}
  console.log(b);
 function getSums(b) {
   var result = [];
   if (!b.length) return result;
   b.reduce(function(sum, item) {
     result.push(sum);
     return sum + item;
   });
   return result.pop();
 }
 console.log(getSums(b));

var g = Math.sqrt(getSums(b));
console.log(g);

