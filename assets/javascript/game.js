// Random, whole number generated number
var randomNumber = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 40)) + min;
    console.log(randomNumber)
}

// The score number that will appear inside #score-number div
var totalScoreNumber = 0;

// Number of wins
var wins = 0;

// Number of losses
var losses = 0;

//*Generates random number to aim for, need to stop this from changing everytime a button is clicked
$("body").on("click", function () {
    $("#random-number").text(randomNumber);
    console.log(randomNumber);
});

// When the game begins
// When ruby image is clicked
$(".thumbnail").on("click", "#ruby", function() {
    //totalScoreNumber goes up by 1
    totalScoreNumber += 1;
        //Adds new score to #total-score-number div
        alert(totalScoreNumber);
        console.log(totalScoreNumber);
        $("#total-score-number").text(totalScoreNumber);
});
//*Create for loop to change incremental value each round

//*When sapphire button is clicked
$(".thumbnail").on("click", "#sapphire", function () {
    //totalScoreNumber goes up by 3
    totalScoreNumber += 3;
        //Adds new score to #total-score-number div
        alert(totalScoreNumber);
        console.log (totalScoreNumber);
        $("#total-score-number").text(totalScoreNumber)
});
//*Create for loop to change incremental value each round

$(".thumbnail").on("click", "#amethyst", function () {
    //totalScoreNumber goes up by 5
    totalScoreNumber += 5;
        //Adds new score to #total-score-number div
        alert(totalScoreNumber);
        console.log (totalScoreNumber);
        $("#total-score-number").text(totalScoreNumber)
});
//*Create for loop to change incremental value each round

$(".thumbnail").on("click", "#emerald", function () {
    //totalScoreNumber goes up by 10
    totalScoreNumber += 10;
        //Adds new score to #total-score-number div
        alert(totalScoreNumber);
        console.log (totalScoreNumber);
        $("#total-score-number").text(totalScoreNumber)
});
//*Create for loop to change incremental value each round