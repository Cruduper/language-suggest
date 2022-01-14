$(document).ready(function() {
  let name;
  let age;
  let personality;
  let organized;
  let favSubject;
 
  $("form#userInfo").submit(function() {

    event.preventDefault();

    if ( document.getElementById("question1").style.display != "none" )
    { 
      $("#question1").hide();
      name = $("input#name").val()
      
      if (name === "Jabroni") {
        $("#alt-text").show();
        $("#alt-text").fadeOut(3000);
        $("#alt-text").hide(5000);
      }

      $("#question2").show();
    } 
    else if ( document.getElementById("question2").style.display != "none" ) {

        console.log("im here 2");
        document.getElementById("question2").style.display = "none";
        age = $("input#age").val();
        document.getElementById("question3").style.display = "block";
    } 
    else if ( document.getElementById("question3").style.display != "none" ) {

        console.log("im here 3");
        document.getElementById("question3").style.display = "none";
        personality = $("input#fav-food").val();
        document.getElementById("question4").style.display = "block";
    } 
    else if ( document.getElementById("question4").style.display != "none" ) {

        console.log("im here 4");
        document.getElementById("question4").style.display = "none";
        organized = $("input#organized").val();
        document.getElementById("question5").style.display = "block";
    } 
    else {

        console.log("im here 5");
        document.getElementById("userInfo").style.display = "none";
        favSubject = $("input#favSubject").val();
        document.getElementById("result").style.display = "block";
    }
  });
});