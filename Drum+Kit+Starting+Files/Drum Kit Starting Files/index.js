for(var i = 0; i< document.querySelectorAll("button").length ; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        document.querySelector( "." + buttonInnerHTML).classList.add("pressed");

        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function(e) {
    var keyPressed = e.key;
    makeSound(keyPressed);

    document.querySelector( "." + keyPressed).classList.add("pressed");
    
    buttonAnimation(keyPressed)
});


function makeSound(key) {

    switch(key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        default:
            console.log(key);
            break;
    }
}


function buttonAnimation(button) {

    var activeButton = document.querySelector( "." + button);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);

}










