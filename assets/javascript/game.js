// a game with 4 crystals and a random target goals
var randomGoal;
var lose = 0;
var win = 0;
var score = 0;
var images = ['assets/images/mind.png', 'assets/images/power.png', 'assets/images/reality.png', 'assets/images/soul.png', 'assets/images/space.png', 'assets/images/time.png', ];

// starting a new gam
var newGame = function () {
    $(".random").empty();
    $(".crystals").empty();
    randomGoal = Math.floor(Math.random() * 109 + 12);
    console.log(randomGoal);
    $(".random").html("Random Goal: " + randomGoal);
//creating the crystals

    for (var i = 0; i < 6; i++) {

        var random = Math.floor(Math.random() * 12 + 1)
        console.log(random)

        var randomImage = Math.floor(Math.random() * images.length)
        console.log(randomImage);

        var crystal = $("<img>");
        crystal.attr({
            "class": "crystal",
            "random-data": random,
            "src": images.splice(randomImage, 1)
        });

        crystal.html(random);
        $(".crystals").append(crystal);
        }
        
    }
newGame();
$(document).on("click", ".crystal", function () {
    console.log($(this).attr("random-data"));

    var num = parseInt($(this).attr("random-data"));
    score += num;
    console.log(score);
    $(".score").text("Your Score: " + score);
    if (score > randomGoal) {
        alert("You lose!");
        lose++;
        $("#lose").text("Lose: " + lose);
        score = 0;  
        newGame();
    }
    else if (score === randomGoal) {
        alert("You won!");
        win++;
        $("#win").text("Wins: " + win);
        score = 0;
        newGame();
    }

});

// every crystal needs to have a random number
//new random number 2b generated 4 crystals when win/lose
// when clicking any crystal it should add to the previous chosen until it =total score
//if it isgreater, then you lose, lose counter goes up and game resets.
//if it is =, then we win, + win counter and reset game