$(document).ready(function() {
 $('.main_btna, .main_btn, nav ul li:nth-child(2)').on('click', function(){
   $('.overlay').fadeToggle('slow');
   $('.modal').show('fadeInDown');
 });

 $('.close').on('click', function(){
   $('.overlay').fadeToggle('slow');
   $('.modal').hide('fadeInDown');
 });


  $('.main_mobmenu_field_list:eq(1)').on('click', function(){
   $('.overlay').fadeToggle('slow');
   $('.modal').show('fadeInDown');
 });


});



