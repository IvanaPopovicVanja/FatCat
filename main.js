/* welcome msg*/
var questions = [
  {
    text : "You need something new?",
    correctAnswer : true
  },
  {
    text : "Did you need new design and code?",
    correctAnswer : true
  },
  {
    text : "Do you need someone reliable?",
    correctAnswer : true
  }
];
var questionIndex = 0;
var userScore = 0;

function askQuestion(){
  var userAnswer = confirm(questions[questionIndex].text);
  if(questions[questionIndex].correctAnswer===userAnswer){ 
  userScore++;
}
questionIndex++;
if(questionIndex !== questions.length){
  askQuestion();
}
}
/*
// askQuestion();

// alert("You are answered on " +userScore+ " of " +questions.length+  ". \nPlease, contact me! ");

/* welcome msg end*/

/* hamMenu */

function hamMenu() {
  var list = document.getElementById("menu");
  if (list.style.display === "block"){
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}
/*hamMenu end */


/* Slider */
var img = document.querySelector('.slide');
var counter = 1;

var loop = setInterval(function() {
  counter++;//2
  if(counter === 4){
    counter = 1;
  }
  img.setAttribute('src','img/art'+counter+'.jpg');
}, 2000)


/* Slider End */
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
      line[k].style.background = "pink";
    }
  }
 }
}
function reload(){
  window.location.reload();
}
/* XO end */
/* Traffic lights */
var trafficLights = document.querySelectorAll('.light');
startLights();

function startLights(){
  trafficLights[0].style.background = "red";
  trafficLights[1].style.background = "transparent";
  trafficLights[2].style.background = "transparent";

setTimeout(function () {
  trafficLights[1].style.background = "yellow";
}, 2000)

setTimeout(function () {
  trafficLights[2].style.background = "green";
  trafficLights[0].style.background = "transparent";
  trafficLights[1].style.background = "transparent";
}, 4000)
setTimeout(startLights,6000)
}
/* Traffic lights end */
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
    errors.push(' Error: Username is to long! ');
  }
  if(password.value != "12345") {
    password.style.border = "1px solid tomato";
    errors.push(' Error: Password is not correct ');
  }
  if(email.value.indexOf('@gmail.com')== -1) {
    email.style.border = "1px solid tomato";
    errors.push(' Error: Email must be gmail! ');
  }
  for(var j=0; j < errors.length; j++)  {
     /* my code */ 
  textError.innerHTML += errors[j];
   /* my code */ 

  if (errors.length !=0){
    //have error
  }else {
    //it's ok
   
    myForm.submit();

    }
}
}
/*  Form End */

