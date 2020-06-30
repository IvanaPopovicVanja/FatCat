
/* XO */

   var box = document.querySelector('.box');
 createTable();
   var boxes = document.querySelectorAll('.xoxo');
   for(var i=0; i<boxes.length; i++) {
     boxes[i].addEventListener('click', insertSymbol)
   }
   function createTable() {
     var text = '';
     for(var i=0; i<9; i++){
       text +='<div class="xoxo"></div>';
     }
     box.innerHTML = text;
   }

   var symbol = "O";
   var lines = [
    [boxes[0],boxes[1],boxes[2]],
    [boxes[3],boxes[4],boxes[5]],
    [boxes[6],boxes[7],boxes[8]],
    [boxes[0],boxes[3],boxes[6]],
    [boxes[1],boxes[4],boxes[7]],
    [boxes[2],boxes[5],boxes[8]],
    [boxes[0],boxes[4],boxes[8]],
    [boxes[2],boxes[4],boxes[6]]
   ];


function insertSymbol(){
 (symbol == "O") ? symbol = "X" : symbol = "O";
 this.innerHTML = symbol;
 checkLines();
}
function checkLines(){
for(var i=0; i<lines.length; i++){
  var line = lines[i];
  if(line[0].innerHTML == line[2].innerHTML && line[0].innerHTML == line[1].innerHTML && line[0].innerHTML != ""){
    for( var k=0;k<line.length; k++){
      line[k].style.background = "tomato";
    }
  }
 }
}
/* XO end */

/*  Form */
var username = document.querySelector('input[type="text"]');
var password = document.querySelector('input[type="password"]');
var email = document.querySelector('input[type="email"]');
var btn = document.querySelector('input[type="submit"]');
var myForm = document.querySelector('form');
var textError = document.getElementById('errors');
btn.addEventListener('click', formValidacija);

function formValidacija(e) {
  e.preventDefault();

  var userData = {
    uv : username.value,
    pv : password.value,
    ev : email.value
  }
  var errors =[];
  var error = "";
  if(username.value.length > 20) {
    username.style.border = "1px solid tomato";
    errors.push(' Greška: Predugačak username! ');
  }
  if(password.value != "12345") {
    password.style.border = "1px solid tomato";
    errors.push(' Greška: Password nije tačan! ');
  }
  if(email.value.indexOf('@gmail.com')== -1) {
    email.style.border = "1px solid tomato";
    errors.push(' Greška: Email mora biti gmail! ');
  }
  for(var j=0; j < errors.length; j++)  {
     /* moj kod */ 
  textError.innerHTML += errors[j];
   /* moj kod */ 

  if (errors.length !=0){
    //ima greške
  }else {
    //sve ok
   
    myForm.submit();

    }
}
}
  

/*  Form End */
