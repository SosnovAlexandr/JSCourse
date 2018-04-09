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
});



