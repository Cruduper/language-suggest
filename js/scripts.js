$(document).ready(function() {
  let name;
  let age;
  let personality;
  let organized;
  let favSubject;
 
  $("form#userInfo").submit(function(event) {

    event.preventDefault;

    if ( document.getElementById("question1").style.display != "none" )
    { 
      console.log("im here");
      document.getElementById("question1").style.display = "none";
      name = $("input#name").val()
      document.getElementById("question2").style.display = "block";
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
        personality = $("input#personality").val();
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
        document.getElementById("question5").style.display = "none";
        favSubject = $("input#favSubject").val();
        document.getElementById("result").style.display = "block";
    }
  });
});