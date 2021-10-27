var numberOfButtons =
document.querySelectorAll(".button").length;
for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

var buttonStyle = this.innerHTML;
sound(buttonStyle);
animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
case "sa":
var sound1 = new Audio("music/sa.mp3");
sound1.play();
break;

case "ri":
var sound2 = new Audio("music/ri.mp3");
sound2.play();
break;

case "ga":
var sound3 = new Audio('music/ga.mp3');
sound3.play();
break;

case "ma":
var sound4 = new Audio('music/ma.mp3');
sound4.play();
break;

case "pa":
var sound5 = new Audio('music/pa.mp3');
sound5.play();
break;

default: console.log(key);
}
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");

  setTimeout(function() {
  activeButton.classList.remove("animation");
  }, 100);
}
