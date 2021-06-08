for(let i = 0, numberOfdrums = document.querySelectorAll(".drum").length; i < numberOfdrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        console.log(this.textContent);
        buttonAnimation(this.textContent);
        playMusic(this.textContent);
    });
}

document.addEventListener("keydown", function(event) {
    console.log(event);
    playMusic(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation (key) {
    let activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}

function playMusic (keyValue) {
    switch (keyValue) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();        
            break;

        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(keyValue);
            break;
    }
}
