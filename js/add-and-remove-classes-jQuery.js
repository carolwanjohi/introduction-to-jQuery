$(document).ready(function() {
  $("button#green").click(function() {
    $("p").removeClass();
    $("p").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("p").removeClass();
    $("p").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("p").removeClass();
    $("p").addClass("red-background");
  });
});
