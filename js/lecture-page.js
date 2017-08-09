$(document).ready(function() {
  $("p#purple").click(function() {
    $("p#purple").removeClass();
    $("p#purple").addClass("purple-background");
  });

  $("p#blue").click(function() {
    $("p#blue").removeClass();
    $("p#blue").addClass("blue-background");
  });

  $("p#red").click(function() {
    $("p#red").removeClass();
    $("p#red").addClass("red-background");
  });

  $("button").click(function() {
    $("p#purple, p#blue, p#red").removeClass();
    $("p#purple, p#blue, p#red").addClass("reset-background");
  });
});
