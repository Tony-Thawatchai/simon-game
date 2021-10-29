var buttonColours = ["red", "blue", "green", "yellow"];
var level = [0];
var output = [];
var playerOutput = [];
var yourScore = 0
var highScore = [];
var i = 0;


// var n = 1;

$(document).keypress(function() {
    //
    // level.push(n);
    // n++;
    // console.log("level = " + level);
    // $("h1").text("Level " + level.length);
    // var randomButton = Math.floor(Math.random() * 4);
    // console.log(randomButton);
    // myLoop();

    $("h2").text("");
    $("h3").text("");
    $("#level-title").css("font-size", "3rem");
    $("h1").text("Level " + level.length);
    $("#watch").text("Watch");
    setTimeout(function() {
      playChallenge();
      $("#watch").text("GO!");
    }, 500);
  }

);

$("#level-title").click(function(){
  $("h2").text("");
  $("h3").text("");
  $("#level-title").css("font-size", "3rem");
  $("h1").text("Level " + level.length);
  $("#watch").text("Watch");
  setTimeout(function() {
    playChallenge();
    $("#watch").text("GO!");
  }, 500);
});

function playChallenge() {


  playerOutput = [];


  yourScore = level.length - 1;
  highScore.push(level.length - 1);



  // console.log("level.length ="+level.length);
  var randomButton = Math.floor(Math.random() * 4);
  // console.log(randomButton);
  var randomChosenColour = buttonColours[randomButton];
  // console.log(randomChosenColour);
  // var n = 4;
  // // console.log(key);
  // if (key == 0) {
  //   n = "green";
  // } else if (key == 1) {
  //   n = "red";
  // } else if (key == 2) {
  //   n = "yellow";
  // } else {
  //   n = "blue";
  // }
  // console.log(n);
  // console.log(document.querySelectorAll("#" + n));
  output.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);

  $("#watch").text("GO!");
  $("#watch").addClass("ready-to-play");
  setTimeout(function(){
    $("#watch").removeClass("ready-to-play");
  },500);

  // setTimeout(function(){
  //   $("#watch").text("");
  // },10000);
  console.log("output =" + output);
  console.log("playerOutput =" + playerOutput);
}
//
//
function myLoop() {
  $("#watch").text("Watch");
  // $(".btn").removeEventListener("click");
  setTimeout(function() { //  call a 1s setTimeout when the loop is called

    console.log(i);
    console.log(output[i]);
    animateLooped(output[i]);
    playSound(output[i]);
    i++; //  increment the counter

    if (i < output.length) { //  if the counter < 10, call the loop function
      myLoop();
    } else {
      setTimeout(function() {
        playChallenge();
      }, 1000);
    }
  }, 1000);

}


//
// function myLoop() {         //  create a loop function
// for (var i = 0; i < output.length; i++) {
// console.log(output);
// $("h1").text(output[i]);
// setTimeout(function() {
//     $("h1").text(output[i]);
//   }, 1000);
// }
// }

// var i=0;
//   setTimeout(function() {   //  call a 1s setTimeout when the loop is called
//     animatePress(output[i]);
//     i++;                      //  increment the counter
//
//     if (i < output.length) {           //  if the counter < 10, call the loop function
//       myLoop();             //  ..  again which will trigger another
//     }                       //  ..  setTimeout()
//   }, 1000)
//
// }


$(".btn").click(function () {

  animatePress(this.id);
  // while (playerOutput.length < output.length) {
  playerOutput.push(this.id);
  // console.log("playerOutput =" + playerOutput);
  // console.log("output ="+output);
  // console.log("playerOutput leghth =" + playerOutput.length);
  // console.log("highScore ="+highScore.length);
  // console.log("output length =" + output.length);
  // }
  checkResult(playerOutput.length - 1);
  playSound(this.id);
});

function checkResult(currentLevel) {
  // console.log(output);
  console.log(playerOutput);
  if (output[currentLevel] === playerOutput[currentLevel]) {
    // var randomButton = Math.floor(Math.random() * 4);
    console.log("success");
    // highScore=level.length;

    if (output.length === playerOutput.length) {
      level.push(1);
      $("h1").text("Level " + level.length);
      $("#watch").text("WIN!!!");
      var winning = "winning";
      playSound(winning);
      $("body").addClass("winning");
      setTimeout(function() {
        $("body").removeClass("winning");
      }, 100);
      console.log("a");
      // myLoop();
      // setTimeout(function(){
      i = 0;
      setTimeout(function() {
        myLoop();
      }, 1000);


      // },1000);
      // }


    }
  } else {
    // highScore.push(1);
    $("h1").html("GAME OVER <br> Click here to continue");
    $("#level-title").css("font-size", "1.5rem");
    $("#watch").text(" ");
    showyourScore(yourScore);
    showHighScore(highScore);
    level = [0];
    output = [];
    $(".btn").removeClass("pressed");
    var soundWrong = "wrong";
    playSound(soundWrong);
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 100);
    // for (var i=0;i,playerOutput.length;i++){
    //   highScore.push(i)
    // };


    // $("h3").text(highScore.length);
  }
}

// playChallenge(0);


// console.log($("."+"this.id").attr("class"));
// console.log(colorClicked);

// console.log($(".btn").attr("class"));

function showyourScore(key) {
  yourScore = key;
  $("h3").text(yourScore);
  $("#yourScore").text("Your score = ");

};

function showHighScore(key) {
  // console.log("Highest score "+highScore);
  $("#high-score").text("Highest score " + Math.max(...highScore));
  $("#high-score").css("margin", "auto 1%");


};

function animatePress(key) {
  $("#" + key).addClass("pressed");
  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 100);
};

function animateLooped(key) {
  $("#" + key).addClass("looped");
  setTimeout(function() {
    $(".btn").removeClass("looped");
  }, 100);
};

function playSound(key) {

  var audio = new Audio("sounds/" + key + ".mp3");
  // console.log(this);
  audio.play();

};
