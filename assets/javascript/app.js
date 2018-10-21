// global variables
var questions = (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
var score 
$("#truebutton").on("click", true)
$("#falsebutton").on("click", false)
// Timer


    $("#resetbutton").click(function(){
        setTimeout(fiveMinutes, 1000 * 300 );
        function fiveMinutes() {
            $("#question").empty();
            $("#picture").empty();
            $("#gameover").append("Game Over");
            $("#finalscore").append(Here is your final score + "score");
        }
        $("question").replaceWith(q1) {
            $("#truebutton").click(function() {
                $("#falsebutton").click();
              });
        }
    })


// question behavior
    

