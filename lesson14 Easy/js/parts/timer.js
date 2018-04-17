function timer () {

let deadline = '2018-05-10';
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


}
module.exports = timer;