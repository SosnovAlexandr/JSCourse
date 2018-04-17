function slide () {

let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
       if (n > slides.length) {
        slideIndex = 1;
       };
       if (n < 1) {
        slideIndex = slides.length;
       };
       for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
       };
       for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
       };
       slides[slideIndex - 1].style.display = 'block';
       dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides (n) {
      showSlides(slideIndex += n)
    }

    function currentSlide(n) {
      showSlides(slideIndex = n)
    }
     
    prev.addEventListener('click', function(){
        plusSlides(-1);
    }); 
    
    next.addEventListener('click', function(){
        plusSlides(1);
    }); 

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length + 1; i++){
          if(event.target.classList.contains('dot') && event.target == dots[i-1]){
            currentSlide(i);
          }
        }
    });

//Калькулятор

let persons = document.getElementsByClassName('counter-block-input')[0],
    restDays = document.getElementsByClassName('counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum =0,
    total = 0;

    totalValue.innerHTML =0;



    persons.addEventListener('change', function() {
       personsSum = +this.value;
       total = (daysSum + personsSum)*4000;
       if (restDays.value == '' || restDays.value < 0) {
        totalValue.innerHtml = 0;
       } else {
        totalValue.innerHTML= total;
       }
    });

    restDays.addEventListener('change', function(){
       daysSum = +this.value;
       total = (daysSum + personsSum)*4000;
       if (persons.value == '' || persons.value < 0)  {
        totalValue.innerHtml = 0;
       } else {
        totalValue.innerHTML= total;
       }
    });

    place.addEventListener('change', function(){
      if (restDays.value == '' || persons.value == ''){
        totalValue.innerHTML = 0;
      } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
    });
    
    }
module.exports = slide;