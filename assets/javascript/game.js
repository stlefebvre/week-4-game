// The score number that will appear inside #score-number div
var totalScoreNumber = 0;

// Number of wins
var wins = 0;

// Number of losses
var losses = 0;

// When ruby image is clicked
$(".thumbnail").on("click", "#ruby", function() {
    //totalScoreNumber goes up by 1
    totalScoreNumber += 1;
        //Adds new score to #total-score-number div
        alert(totalScoreNumber);
        console.log(totalScoreNumber);
    }
);