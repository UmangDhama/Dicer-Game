var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

if(randomNumber1>randomNumber2){
    document.querySelector(".win").innerHTML = "Player 1 Wins!";
}

if(randomNumber1<randomNumber2){
    document.querySelector(".win").innerHTML = "Player 2 Wins!";
}

if(randomNumber1===randomNumber2){
    document.querySelector(".win").innerHTML = "Both Player 1 Wins!";
}  

document.querySelector(".img1").src = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img2").src = "./images/dice" + randomNumber2 + ".png";
 