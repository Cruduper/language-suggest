
    //Business Logic code
function findLanguage( nameUser, ageUser, foodUser, organizedUser, subjectUser)  {
  if (nameUser != "Jabroni") {
    if( ageUser < 60 ) {
      if(foodUser === "nachos")  {
        if(organizedUser === "very-organized") {
          return "C++";
        }
        else if(organizedUser === "organized") {
          if(subjectUser === "physEd" || subjectUser === "art") {
            return "CSS";
          }
          else if( subjectUser === "math")  {
            return "C++";
          }
          else  {
            return "C";
          }
        }
        else  {
          return "CSS";
        }
      }
      else if (foodUser === "tacos") {
        if( subjectUser === "art")  {
          return "Javascript";
        }
        else if ( subjectUser === "physEd" )  {
          return "Java";
        }
        else  {
          if( organizedUser === "very-organized" || organizedUser === "organized")  {
            return "C++";
          }
          else  {
            return "Javascript";  
          }
        }
      }
      else  {
        return "CSS"
      }
    } 
    else  {
      return "HTML";
    }
  } 
  else {
    return "HTML";
  }
}

function secondsElapsed (startingTime) {
  var dateNow = new Date ();
  var timeNow = dateNow.getTime ();
  var timeDiff = timeNow - startingTime;
  var secondsElapsed = Math.floor ( timeDiff / 1000 );

  return ( secondsElapsed ); 
}


    //User Interface code
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
      else{
        // This else intentionally left blank
      }

      if (secondsElapsed(startTime) < 3)  {
        $("#sonik").addClass("inline");
        $("#sonik").fadeIn({queue: false, duration: 400});
        $("#sonik").animate({left: '1000px', top: '0px'}, 900);
        setTimeout(() => {  $("#sonik").fadeOut({queue: false, duration: 200}); }, 600);
      }

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