
var scoreList = document.getElementById("score-list");
var clearScoresButton = document.getElementById("clear-scores");
var goBackButton = document.getElementById("go-back");

// Retrieve high scores from local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Sort high scores based on time left (score)
highScores.sort(function (a, b) {
  return b.score - a.score;
});

// clear score table
scoreList.innerHTML = "";


// Populate score table with high scores
for (var i = 0; i < highScores.length; i++){
  var score = highScores[i];

  var row = document.createElement("tr");

  var initialsCell = document.createElement("td");
  initialsCell.textContent = score.initials + " : "; // Add colon after initials

  var scoreCell = document.createElement("td");
  scoreCell.textContent = score.score;

  row.appendChild(initialsCell);
  row.appendChild(scoreCell);

  scoreList.appendChild(row);
}

// Option to insert last score at the top of scoreslist
//scoreList.insertBefore(row, scoreList.firstChild);

// Event listener for Go Back button
goBackButton.addEventListener("click", function (){
  window.location.href = "quiz.html";
});

// Event listener for Clear Scores button
clearScoresButton.addEventListener("click", function () {
  localStorage.removeItem("highScores");
  scoreList.innerHTML = "";
});