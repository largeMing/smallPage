$(document).ready(function () {
   $("#first").click(function () {
       $(this).css({"background":"#f6f6f6","color":"#0079ad"});
       $("#second").css({"background":"#0079ad","color":"white"});
      $(".mainOneBody2").hide();
      $(".mainOneBody").show();
   });
    $("#second").click(function () {
        $(this).css({"background":"#f6f6f6","color":"#0079ad"});
        $("#first").css({"background":"#0079ad","color":"white"});
        $(".mainOneBody").hide();
        $(".mainOneBody2").show();
    });
});