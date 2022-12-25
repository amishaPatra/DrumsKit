// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!")
// });

// when buttons on the screen are pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var letter = this.innerHTML;
    makeSound(letter);
    animation(letter);


  });

}
// When keyboard is used
document.addEventListener("keydown", function(event){          // document. to apply it for the whole screen/program
  makeSound(event.key);
  animation(event.key);


})

function makeSound(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'k':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 'l':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:

  }
}

function animation(keyButton){

  var activeKey = document.querySelector("." + keyButton);
  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  } , 200)
}
