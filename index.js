// Setting the initial values for game

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var playStart = false;

// function to detect the keypress to start the game

$(document).keypress(function () {
  if (!playStart) {
    $("#level-title").text("Level " + level);
    nextSequence();
    playStart = true;
  }
});

// function to generate the random game-sequence

function nextSequence() {
  userClickedPattern =
    []; /*To reset the value of user-clicked-pattern ,everytime the right sequence is clicked by the user */

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

/* Added eventlistener to the buttons so every time the button is clicked it is triggerd */
$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  console.log(userChoosenColor);
  userClickedPattern.push(userChoosenColor);
  console.log(userClickedPattern);
  animatePress(userChoosenColor);
  playSound(userChoosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

/* Added sounds to the button clicked */
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

/* Added animation on the buttons pressed */
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");

  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

/* function to check the wheather userclicked pattern is right or not */

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    wrongAnswer();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game-Over");
    startOver();
  }
}
/* Audio for the wrong Answer */
function wrongAnswer() {
  var audio1 = new Audio("./sounds/wrong.mp3");
  audio1.play();
}

/* Reset */
function startOver() {
  level = 0;
  gamePattern = [];
  playStart = false;
}
