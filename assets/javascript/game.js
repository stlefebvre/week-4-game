$(document).ready(function() {
 // Random, whole number generated number
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 0));
    }

    //Variable to call getRandomInt function
    var randomNumber = getRandomInt(10,50)

    //Variable to change value of Ruby button
    var rubyValue = getRandomInt(1, 5);

    //Variable to change value of Sapphire button
    var sapphireValue = getRandomInt(1, 5);

    //Variable to change value of Amethyst button
    var amethystValue = getRandomInt(1, 10)

    //Variable to change value of Emerald button
    var emeraldValue = getRandomInt(1, 10)

    // The score number that will appear inside #score-number div
    var totalScoreNumber = 0;

    // Number of wins
    var wins = 0;

    // Number of losses
    var losses = 0;

    //Create variable to change the input of the button for every round (variable will be a function), then call it inside each button

    //*Generates random number to aim for, need to stop this from changing everytime a button is clicked
    //*Create a "start game" button, or something to that effect
    $("#start-button").on("click", function () {
        $("#random-number").text(randomNumber);
        $("#winsNumber").text("Wins: " + wins);
        $("#lossesNumber").text("Losses: " + losses);
    });

    //variable that defines a win or loss
    var winOrLoss = function () {
        if (totalScoreNumber === randomNumber) {
            wins++;
            alert("Win!");
            $("#winsNumber").text("Wins: " + wins);
            $("#random-number").text(getRandomInt(10,50));
            console.log("Goal Number: " + randomNumber);
            $("#current-score-number").text(totalScoreNumber = 0);
        }

        else if (totalScoreNumber > randomNumber) {
            losses++;
            alert ("Loss!");
            $("#lossesNumber").text("Losses: " + losses);
            $("#random-number").text(getRandomInt(10,50));
            console.log("Goal Number: " + randomNumber);
            $("#current-score-number").text(totalScoreNumber === 0);
            totalScoreNumber === 0
        }
    };

    //Sets previous function to check for a win or loss every second
    window.setInterval(winOrLoss, 100)

    // When the game begins
    // When ruby image is clicked
    $(".thumbnail").on("click", "#ruby", function() {
        //totalScoreNumber goes up by rubyValue
        totalScoreNumber += rubyValue;
        console.log(rubyValue)
            //Adds new score to #total-score-number div
            alert(totalScoreNumber);
            console.log("Ruby input: " + totalScoreNumber);
            $("#current-score-number").text(totalScoreNumber);
            winOrLoss ();
    });

    //*When sapphire button is clicked
    $(".thumbnail").on("click", "#sapphire", function () {
        //totalScoreNumber goes up by sapphireValue
        totalScoreNumber += sapphireValue;
            //Adds new score to #total-score-number div
            alert(totalScoreNumber);
            console.log ("Sapphire input: " + totalScoreNumber);
            $("#current-score-number").text(totalScoreNumber);
            winOrLoss ();
    });
    //*Create for loop to change incremental value each round

    $(".thumbnail").on("click", "#amethyst", function () {
        //totalScoreNumber goes up by amethystValue
        totalScoreNumber += amethystValue;
            //Adds new score to #total-score-number div
            alert(totalScoreNumber);
            console.log ("Amethyst input" + totalScoreNumber);
            $("#current-score-number").text(totalScoreNumber);
            winOrLoss ();
    })
    //*Create for loop to change incremental value each round

    $(".thumbnail").on("click", "#emerald", function () {
        //totalScoreNumber goes up by emeraldValue
        totalScoreNumber += emeraldValue;
            //Adds new score to #total-score-number div
            alert(totalScoreNumber);
            console.log ("Emerald input: " + totalScoreNumber);
            $("#current-score-number").text(totalScoreNumber);
            winOrLoss ();
    });
})