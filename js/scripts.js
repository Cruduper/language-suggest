$(document).ready(function() {
  let name;
  let age;
  let favFood;
  let organized;
  let favSubject;
 
  $("form#userInfo").submit(function() {

    event.preventDefault();

    if ( document.getElementById("question1").style.display != "none" )
    { 
      $("#question1").hide();
      name = $("input#name").val();
      
      if (name === "Jabroni") {
        $("#alt-text").show();
        $("#alt-text").fadeOut(3000);
      }

      $("#question2").show();
    } 
    else if ( document.getElementById("question2").style.display != "none" ) {

        $("#question2").hide();
        age = $("input#age").val();
        $("#question3").show()
    } 
    else if ( document.getElementById("question3").style.display != "none" ) {

        $("#question3").hide();
        favFood = $("input#fav-food").val();
        $("#question4").show()
    } 
    else if ( document.getElementById("question4").style.display != "none" ) {

        $("#question4").hide();
        organized = $("input#organized").val();
        $("#question5").show()
    } 
    else {
        $("#question5").hide();
        $("#userInfo").hide();
        favSubject = $("input#favSubject").val();
        findLanguage(name, age, favFood, organized, favSubject)
        $("#result").show()
    }
  });
});