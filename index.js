var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red" , "blue" , "green" , "yellow"];
 

function nextSequence() {
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#" + randomChoosenColor ).fadeOut(500).fadeIn(500);

    playSound(randomChoosenColor);
    
    
}

$(".btn").click(function () {
     var userChoosenColor = (this.id);
     userClickedPattern.push(userChoosenColor);
     console.log(userClickedPattern);

    $("#" + userChoosenColor).fadeOut(500).fadeIn(500); 
    playSound(userChoosenColor);

    
     
})

function playSound(name) {
    var audio = new Audio("./sounds/"+ name +".mp3");
    audio.play();
}