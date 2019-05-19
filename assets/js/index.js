var buttonsToBeClicked = document.querySelectorAll(".drum").length;

// var soundSource = "../sounds/";

for (i = 0; i < buttonsToBeClicked; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       console.log(this.style.color="White");
    });

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();