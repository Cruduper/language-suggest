$(document).ready(function() {
  const name = $("input#name").val();
  const age = $("input#age").val();
  const personality = $("input#personality").val();
  const organized = $("input#organized").val();
  const favSubject = $("input#favSubject").val();
 
  $("form#userInfo").submit(function(event) {
    event.preventDefault;
    if ( 1 === 1  )
    { 
      console.log(document.getElementById("question1").style.display);
      document.getElementById("question1").style.display = "none";
      console.log("im here");
    }
  });
});