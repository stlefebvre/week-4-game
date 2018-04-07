$(document).ready(function() {
    // Random, whole number generated number
       function getRandomInt(min, max) {
           console.log("getRandomInt")
           return 5
        //    return Math.floor(Math.random() * (max - min + 1));
       }
   
       //Variable to call getRandomInt function
       var randomNumber = getRandomInt(10,50)
   
       //Variable to change value of Ruby button
       var rubyValue = (Math.floor(Math.random() * 10) + 1);
   
       //Variable to change value of Sapphire button
       var sapphireValue = (Math.floor(Math.random() * 10) + 1);
   
       //Variable to change value of Amethyst button
       var amethystValue = (Math.floor(Math.random() * 12) + 1);
   
       //Variable to change value of Emerald button
       var emeraldValue = (Math.floor(Math.random() * 12) + 1)
   
       // The score number that will appear inside #score-number div
       var totalScoreNumber = 0;
   
       // Number of wins
       var wins = 0;
   
       // Number of losses
       var losses = 0;

       function reset () {
           totalScoreNumber = 0;
           $("#total-score-number").text(totalScoreNumber);
        //    rubyValue = (Math.floor(Math.random() * 10) + 1);
        //    sapphire = (Math.floor(Math.random() * 10) + 1);
        //    amethystValue = (Math.floor(Math.random() * 10) + 1);
        //    emeraldValue = (Math.floor(Math.random() * 10) + 1);
       }
   
       //variable that defines a win or loss
       function winOrLoss () {
        if (totalScoreNumber === randomNumber) {
            wins++;
            alert("Win!");
            $("#winsNumber").text("Wins: " + wins);
            randomNumber = getRandomInt(10,50)
            $("#random-number").text(randomNumber);
            reset();
        }

        else if (totalScoreNumber > randomNumber) {
            losses++;
            alert ("Loss!");
            $("#lossesNumber").text("Losses: " + losses);
            randomNumber = getRandomInt(10,50)
            $("#random-number").text(randomNumber);
            reset();
        }
    };
   
       //*Generates random number to aim for, need to stop this from changing everytime a button is clicked
       //*Create a "start game" button, or something to that effect
       $("#start-button").on("click", function () {
           $("#random-number").text(randomNumber);
           $("#winsNumber").text("Wins: " + wins);
           $("#lossesNumber").text("Losses: " + losses);
       });
   
       // When the game begins
       // When ruby image is clicked
       $(".thumbnail").on("click", "#ruby", function() {
           //totalScoreNumber goes up by rubyValue
           totalScoreNumber += 1;
           console.log(rubyValue)
               //Adds new score to #total-score-number div
               alert(totalScoreNumber);
               console.log("Ruby input: " + totalScoreNumber);
               $("#total-score-number").text(totalScoreNumber);
               winOrLoss ();
       });
   
       //*When sapphire button is clicked
       $(".thumbnail").on("click", "#sapphire", function () {
           //totalScoreNumber goes up by sapphireValue
           totalScoreNumber += 3;
               //Adds new score to #total-score-number div
               alert(totalScoreNumber);
               console.log ("Sapphire input: " + totalScoreNumber);
               $("#total-score-number").text(totalScoreNumber);
               winOrLoss ();
       });
   
       $(".thumbnail").on("click", "#amethyst", function () {
           //totalScoreNumber goes up by amethystValue
           totalScoreNumber += 5;
               //Adds new score to #total-score-number div
               alert(totalScoreNumber);
               console.log ("Amethyst input" + totalScoreNumber);
               $("#total-score-number").text(totalScoreNumber);
               winOrLoss ();
       })
   
       $(".thumbnail").on("click", "#emerald", function () {
           //totalScoreNumber goes up by emeraldValue
           totalScoreNumber += 10;
               //Adds new score to #total-score-number div
               alert(totalScoreNumber);
               console.log ("Emerald input: " + totalScoreNumber);
               $("#total-score-number").text(totalScoreNumber);
               winOrLoss ();
       });
})