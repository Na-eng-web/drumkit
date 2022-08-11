var a = document.querySelectorAll(".drum").length;
var i =0;
while(i < a) {
    document.querySelectorAll(".drum")[i].addEventListener("click" ,drumClick);
        function drumClick(){
        var buttoonValue= this.innerHTML;
        makesound(buttoonValue);   
        btnAnimation(buttoonValue);
        }
    i++;
}
  
document.addEventListener("keydown", nakul);
function nakul(e){
  makesound(e.key)
  btnAnimation(e.key) };


function makesound(key){
    switch (key) {
        case"w":
            var sound= new Audio("sounds/tom-1.mp3");
             sound.play();
        break;
        case"a":
            var sound= new Audio("sounds/tom-2.mp3");
            sound.play();
        break;
        case"s":
            var sound= new Audio("sounds/tom-3.mp3");
            sound.play();
        break;
        case"d":
            var sound= new Audio("sounds/tom-4.mp3");
            sound.play();
        break;
        case"j":
            var sound= new Audio("sounds/snare.mp3");
            sound.play();
        break;
        case"k":
            var sound= new Audio("sounds/crash.mp3");
            sound.play();
        break;
        case"l":
            var sound= new Audio("sounds/kick-bass.mp3");
            sound.play();
        break;
        default:
            break;
    }

}

function btnAnimation(xyz){

  var btnanima = document.querySelector("."+xyz);
console.log(btnanima);
  btnanima.classList.add("pressed");

    setTimeout(function(){
      btnanima.classList.remove("pressed");
    },100)
}

