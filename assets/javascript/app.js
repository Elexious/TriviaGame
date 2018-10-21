// global variables
var questions = (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
var images
var answers = ()
var score = (0) 
var questlimit
$("#truebutton").on("click", true);
$("#falsebutton").on("click", false);
// Timer

// When the reset button is pressed the timer resets
    $("#resetbutton").click(function(){
        setTimeout(fiveMinutes, 1000 * 300 );
// after five minutes the timer should activate the funtion that clears the question and the image while telling the final score and the phrase "Game Over"
        function fiveMinutes() {
            $("#question").empty();
            $("#picture").empty();
            $("#gameover").append("Game Over");
            $("#finalscore").append(Here is your final score + "score");
        }
// Also, the reset button should begin the quiz which begins with question 1 which replaces the text in the question line with the actual question and also fill the picture div with the first image.
            $("#picture").replaceWith("images")
            $("#question").replaceWith("#questions") {
// If the user presses the correct answer the game should add to the score and move on to the next question
                $("#falsebutton").click(function() {
                    $("#score") ++;
                    $("#questions") ++;
                    $("#images") ++;
                };
                $("#truebutton").click(function() {
                    $("#questions") ++;
                    $("#images") ++;
                };
              });
        };
    };


// question behavior
    
