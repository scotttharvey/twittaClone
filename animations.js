$(function(){
$(".tweet-actions").hide();
$("#tweet-submit, #char-count").hide();
$(".stats, .reply").hide();


$(".tweet-compose").on("click", function(){
  $(this).animate({height: "5em"}, 500);
  $(".button, #char-count").fadeIn(700);

$("#tweet-compose-left").keyup(function(){
  var textLength = ($("#tweet-compose-left").val()).length;
  var charCount = $("#char-count");
  var charCountLength = 140;
  charCountLength -= textLength;
  $("#char-count").text(charCountLength);

  if(charCountLength <= 0){
    $("#tweet-submit").prop("disabled", true);
  }
  else{
    $("#tweet-submit").prop("disabled", false);
  }

  if(charCountLength <= 10){
    charCount.css("color", "red");
  }
  else if(charCountLength > 10){
    charCount.css("color", "black");
  }
    });
});



$("#tweet-submit").click(function(){

  var tweet = $("#tweet-compose-left").val();
  var monkey = $("#monkey").clone();

  $("#stream").prepend(monkey);
  // monkey.addClass(".tweet");
  monkey.find(".tweet-text").html(tweet);
  monkey.find(".avatar").attr("src", "http://screenrant.com/wp-content/uploads/Game-of-Thrones-Finale-Jon-Snow-Dead-Killed.jpg");
  monkey.find(".fullname").html("John Snow");
  monkey.find(".username").html("@oh-no-john-snow");
  $(".tweet-actions").hide();
  $(".content").hover(function(){
    $(".tweet-actions").fadeIn(400);},
      function(){
      $(".tweet-actions").fadeOut(400);
    });

  });

  $(".tweet").on("click", function(){
    // $(this).animate({height: "5em"}, 500);
    $(".stats, .reply").fadeIn(300);
});
$(".time").on("click", function(){
  event.timestamp;
})
var boot = $(document).on('.data-api');
$(".avatar").hover(function(){
  (boot).fadeIn(200);
})

  })
