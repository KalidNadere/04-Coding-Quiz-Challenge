
var scoreList = document.getElementById("score-list");
var clearScoresButton = document.getElementById("clear-scores");
var goBackButton = document.getElementById("go-back");

// Retrieve high scores from local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Sort high scores based on time left (score)
highScores.sort(function (a, b) {
  return b.score - a.score;
});
