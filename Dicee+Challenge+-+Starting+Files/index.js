window.onload = myFunction;

function myFunction() {
    var num1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
    var num2 = Math.floor(Math.random() * 6) + 1;

    // Ensure the image path is correct
    var basePath = "./images/dice";

    document.querySelectorAll("img")[0].src = basePath + num1 + ".png";
    document.querySelectorAll("img")[1].src = basePath + num2 + ".png";

    if(num1 > num2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if(num1 < num2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
