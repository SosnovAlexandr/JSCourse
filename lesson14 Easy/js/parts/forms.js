function forms () {

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

}
module.exports = forms;