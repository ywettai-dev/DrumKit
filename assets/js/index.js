//Get key and play sound from user interaction
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

//Button Click interaction
var buttonsToBeClicked = document.querySelectorAll(".drum").length;

for (i = 0; i < buttonsToBeClicked; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });

}

//Keyboard Press interaction
document.addEventListener("keydown", function (event) {

    var eventKey = event.key;
    
    makeSound(eventKey);

    buttonAnimation(eventKey);

})

//Adding keystroke animation

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    //Add predefined class in css to the active button
    activeButton.classList.add("pressed");

    //Set active button time out with setTimeout function
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}