var buttonColours = ["green","red", "yellow","blue"];
var i=0;
// $(document).keypress(function() {
// for (var i = 0; i < buttonColours.length; i++) {
//   console.log(buttonColours[i]);
//   animatePress(buttonColours.length[1]);
// }
// });

$(document).keypress(function(){
  myLoop();
  i=0;
  console.log(i);
});

$(document).click(function(){
  myLoop();
  i=0;
  console.log(i);
});


function myLoop() {

  setTimeout(function() {   //  call a 1s setTimeout when the loop is called
    console.log(buttonColours[i]);
    animatePress(buttonColours[i]);
    i++;                      //  increment the counter

    if (i < buttonColours.length) {           //  if the counter < 10, call the loop function
      myLoop();
    } else {
      setTimeout(function() {
        $("h1").css("color","red");
      },1000)
    }
  }, 1000)

}






function animatePress(key) {
  $("#" + key).addClass("pressed");
  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 100);
};
