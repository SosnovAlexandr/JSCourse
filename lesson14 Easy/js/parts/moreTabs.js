function moreTabs () {

let btnPop = document.getElementsByClassName('description-btn');
console.log(btnPop);

for (let i = 0; i < tabContent.length; i++){
    btnPop[i].addEventListener('click', ()=>{
      btnPop[i].classList.add('more-splash');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      });
     }


}

module.exports = moreTabs;