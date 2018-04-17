window.addEventListener('DOMContentLoaded', function() {
let tab = document.getElementsByClassName('info-header-tab'),
    tabContent = document.getElementsByClassName('info-tabcontent'),
    info = document.getElementsByClassName('info-header')[0];

function hideTabContent(a){
	   for (let i = a; i < tabContent.length; i++){
	   	tabContent[i].classList.remove('show');
	   	tabContent[i].classList.add('hide');
	   }
}
hideTabContent(1);

function showTabContent(b) {
	 if (tabContent[b].classList.contains('hide')){
	 	hideTabContent(0);
	 	tabContent[b].classList.remove('hide');
	 	tabContent[b].classList.add('show');
	 }
}    

info.addEventListener('click', function(event){
   let target = event.target;
   if(target.className == 'info-header-tab') {
       for( let i = 0; i < tab.length; i++) {
       	if (target == tab[i]) {
       		showTabContent(i);
       		break;
       	}
       }
   }
});


//Timer
let deadline = '2018-04-10';
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()),
  seconds =  Math.floor( (t/1000) % 60),
  minutes = Math.floor( (t/1000/60) % 60),
  hours = Math.floor( (t/(1000*60*60)));

  return {
     'total': t,
     'hours': hours,
     'minutes': minutes,
     'seconds': seconds
  };
}

 function setClock(id, endtime) {
   let timer = document.getElementById(id),
       hours = timer.querySelector('.hours'),
       minutes = timer.querySelector('.minutes'),
       seconds = timer.querySelector('.seconds');

       function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        let timeInterval = setInterval(updateClock, 1000);

        if (t.total <= 0) {
          clearInterval(timeInterval);
          hours.innerHTML = 0;
          minutes.innerHTML = 0;
          seconds.innerHTML = 0;
        }
       }

       updateClock();     
 }
  setClock('timer', deadline);


//окно
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  more.addEventListener('click', ()=>{
      more.classList.add('more-splash');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', ()=>{
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
  });


//табы
let btnPop = document.getElementsByClassName('description-btn');
console.log(btnPop);

for (let i = 0; i < tabContent.length; i++){
    btnPop[i].addEventListener('click', ()=>{
      btnPop[i].classList.add('more-splash');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      });
     }


//отправка формы

let message = new Object();
message.loading = "Загрузка...";
message.success = "Всё прошло успешно!";
message.failure ="Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0],
    input = form.getElementsByTagName('input'),
    image = document.getElementsByClassName('form-image')[0],
    statusMessage = document.createElement('div');

image.style.display = 'none';

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let formData = new FormData(form);
      request.send(formData);
      request.onreadystatechange = function(){
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if(request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            statusMessage.style.display = 'inline-block';
            statusMessage.style.fontSize = '20px';
            statusMessage.style.marginLeft = '10px';
            statusMessage.style.marginTop = '10px';
            statusMessage.style.verticalAlign = 'middle';
            image.style.display = 'inline-block';
            image.style.marginTop = '10px';
            image.style.verticalAlign = 'middle';
          } else {
            statusMessage.innerHTML = message.failure;
          }
        }
      };
      for (let i = 0; i <input.length; i++){
        input[i].value = '';
      }
    });




//нижняя форма

let send = new Object();
send.success = "Всё прошло успешно!";

let botForm = document.getElementById('form');
let input1 = botForm.getElementsByTagName('input'),
    message1 = document.createElement('div');

botForm.addEventListener('submit', function(event) {
  event.preventDefault();
  botForm.appendChild(message1);

  let request = new XMLHttpRequest();
  request.open("POST", 'server.php');
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let formData1 = new FormData(botForm);
  request.send(formData1);
  request.onreadystatechange = function(){
      if(request.status == 200 && request.status < 300) {
        message1.innerHTML = send.success;
      }
    }
  });
  for (let i = 0; i <input1.length; i++){
    input1[i].value = '';
  }


});








