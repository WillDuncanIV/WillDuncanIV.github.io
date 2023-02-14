
$(document).ready(function() {
  $("#animate-button").click(function() {
    $("#heading").animate({
      fontSize: "5em"
    }, 500, function() {
      $("#heading").animate({
        fontSize: "3em"
      }, 500);
    });
  });
});
$(function () {
  $("#animate-button").click(function() {
    var $image = $("#image");
    if ($image.css("border-style") === "none") {
      $image.css("border", "solid 15px silver");
      } else {
      $image.css("border", "none");
      }
    });
  });
  $(function() {
    $("#animate-button").click(function() {
      if ($("#heading").css("color") === "rgb(255, 0, 0)") { 
        $("#heading").css("color", "silver"); 
      } else {
        $("#heading").css("color", "red"); 
      }
    });
  });
