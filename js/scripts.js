function findLanguage( _name, _age, _favFood, _organized, _favSubject)  {
  if (_name != "Jabroni") {
    if( _age < 60 ) {
      if(_favFood === "nachos")  {
        if(_organized === "very-organized")
          return "C++";
        else if(_organized === "organized") {
          if(_favSubject === "physEd" || _favSubject === "art") 
            return "CSS";
          else if( _favSubject === "math")  
            return "C++"
          else  
            return "C"
        }
        else  
          return "CSS";
      }
      else if (_favFood === "tacos") {
        if( _favSubject === "art")  
          return "Javascript";
        else if ( _favSubject === "physEd" )
          return "Java";
        else  {
          if( _organized === "very-organized" || _organized === "organized")
            return "C++";
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

function secondsElapsed (_startTime) {
  var date_now = new Date ();
  var time_now = date_now.getTime ();
  var time_diff = time_now - _startTime;
  var seconds_elapsed = Math.floor ( time_diff / 1000 );

  return ( seconds_elapsed ); 
}



$(document).ready(function() {
  let name;
  let age;
  let favFood;
  let organized;
  let favSubject;

  const startDate = new Date();
  const startTime = startDate.getTime();
  console.log("pause");
 
  $("form#userInfo").submit(function() {
    event.preventDefault();

    if ( document.getElementById("question1").style.display != "none" ) { 



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

      if (secondsElapsed(startTime) < 3)  {
        $("div#sonik").show();
        $("div#sonik").animate({left: '1000px', top: '-500px'}, {duration: 400}, function() {
          ("div#sonik").hide();
        });  
      }
        
      //$("div#sonik").hide();
      $("#question2").show();
    } 
    else if ( document.getElementById("question2").style.display != "none" ) {
        $("#question2").hide();
        age = $("input#age").val();
        $("#question3").show();  
    } 
    else if ( document.getElementById("question3").style.display != "none" ) {
        $("#question3").hide();
        favFood = $("select#favFood").val();
        $("#question4").show();  
    } 
    else if ( document.getElementById("question4").style.display != "none" ) {
        $("#question4").hide();
        organized = $("select#organized").val();
        $("#question5").show();  
    } 
    else {
        $("#instructions").hide();
        $("#question5").hide();
        $("#add-info").hide();
        favSubject = $("input:radio[name=favSubject]:checked").val();
        if (favSubject === "physEd")  {
          $("#alt-text1").show();
          $("#alt-text1").fadeOut(3000); 
        }        
        let yourLanguage = findLanguage(name, age, favFood, organized, favSubject)
        $("#langToLearn").text(yourLanguage);
        $("#result").show();
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