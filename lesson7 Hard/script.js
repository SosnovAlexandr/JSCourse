let button1 = document.getElementById("button");
let button2 = document.getElementById("button2");



function myAnimation1(){
    let rider = document.querySelector(".mario"),
				    lines = document.querySelector(".lines"),
				    pos = 10,  
				    id = setInterval(frame, 50);
   function frame (){
      if (pos == 80){
      	clearInterval(id);
      } else {
      	pos++;
      	rider.style.left = pos + '%';
      }
   }
}
button1.addEventListener('click', myAnimation1);


function myAnimation2(){
    let rider = document.querySelector(".mario"),
				    lines = document.querySelector(".lines"),
				    pos = 80,  
				    id = setInterval(frame2, 50);
   function frame2 (){
      if (pos == 10){
      	clearInterval(id);
      } else {
      	pos--;
      	rider.style.left = pos + '%';
      }
   }
}
button2.addEventListener('click', myAnimation2);