var gary = document.getElementById("garyAudio");
$("input").change(onChange);    
$(".saturnText").hide();
$(".neptuneText").hide();

function onChange(evt) {
  $(".saturnText").hide();
  $(".neptuneText").hide();
  let text = $(this).data("correct") + "Text";
  console.log(text);
  let start = $(this).data("start");
  let duration = $(this).data("duration"); 
  let correct = $(this).data("correct");
  let response = ($(this).val()).toLowerCase();
  $("." + text).show();
  if (correct == response) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    gary.currentTime = start;
    gary.play();
    setTimeout(function(){ gary.pause(); }, duration);
  }if (correct != response && response != "") {
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
  if (response == "") {
    $(this)
      .removeClass("correct")
      .removeClass("incorrect");
  }
}//end onChange