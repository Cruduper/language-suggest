function findLanguage( _name, _age, _favFood, _organized, _favSubject)  {

  // easter egg, try "Jabroni" as the name, with a capital J
  if (_name != "Jabroni") {
    if( _age < 60 ) {
      if(_favFood === "nachos")  {
        if(_organized === "very-organized") {
          return "C++";
        }
        else if(_organized === "organized") {
          if(_favSubject === "physEd" || _favSubject === "art") {
          return "CSS";
          }
          else if( _favSubject === "math")  {
            return "C++"
          }
          else  
            return "C"
        }
        else  
          return "CSS";
      }
      else if (_favFood === "tacos") {
        if( _favSubject === "art")  {
          return "Javascript";
        }
        else if ( _favSubject === "pe" )  {
          return "Java";
        }
        else  {
          if( _organized === "very-organized" || _organized === "organized")  {
            return "C++";
          }
          else
            return "Javascript";
        }
      }
      else
        return "CSS"

    } 
    else
        return "HTML";
  } 
  else 
      return "HTML";
}


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
        $("#alt-text1").show();
        $("#alt-text1").fadeOut(3000);
      }
      else if (name === "John Doe") {
        $("#alt-text2").show();
        $("#alt-text2").fadeOut(3000);
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
        favFood = $("select#favFood").val();
        $("#question4").show()
    } 
    else if ( document.getElementById("question4").style.display != "none" ) {

        $("#question4").hide();
        organized = $("select#organized").val();
        $("#question5").show()
    } 
    else {
        $("#instructions").hide();
        $("#question5").hide();
        $("#add-info").hide();
        favSubject = $("input:radio[name=favSubject]:checked").val();
        let yourLanguage = findLanguage(name, age, favFood, organized, favSubject)
        $("#langToLearn").text(yourLanguage);
        $("#result").show()
        $("#start-over").show();
    }
  });

  $(document.getElementById('start-over')).click(function()  {

  $("#result").hide();
  $("#langToLearn").text("");
  $("#start-over").hide();
  $("#instructions").show();
  $("#question1").show();
  $("#add-info").show();
  }); 

});