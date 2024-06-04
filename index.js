//Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Concatenating to get a random dice image
//dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";
//Concatenating with image source
//images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage;
//We have to select both the images; therefore querySelectorAll
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//For second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//Change the page heading

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} 
else {
    document.querySelector("h1").innerHTML = "🤝🏼 Draw! 🤝🏼";
}