var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var playStart = false;

$(document).keypress(function () {
  if (!playStart) {
    $("#level-title").text("Level " + level);
    nextSequence();
    playStart = true;
  }
});

function nextSequence() {

  userClickedPattern = [];


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("#" + randomChoosenColor)
    .fadeOut(500)
    .fadeIn(500);
  playSound(randomChoosenColor);
  console.log(gamePattern);
  level++;
  $("#level-title").text("Level " + level);
}
$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  console.log(userChoosenColor);
  userClickedPattern.push(userChoosenColor);
  console.log(userClickedPattern);
  animatePress(userChoosenColor);
  playSound(userChoosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");

  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
  }
}
