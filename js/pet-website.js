$(document).ready(function() {
  $("button#white-on-black").click(function() {
    $("body").removeClass();
    $("body,.jumbotron").addClass("black-background");
    // $(".jumbotron").addClass("jumbotron-black-background");
  });
  $("button#black-on-white").click(function() {
    $("body").removeClass();
    $("body,.jumbotron").addClass("white-background");
    // $(".jumbotron").addClass("jumbotron-original-background");
  });
  //Going back to black, jumbotron remains white
});
