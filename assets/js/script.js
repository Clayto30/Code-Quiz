var questionsEl = document.getElementById("questions")
var currentQuestion = 0
var answersEl = document.getElementById("answers")
let time = 120
var countdownEl = document.getElementById("countdown")
var lessTime = function() {time--, addCountdownEl.textContent = "Time: " + time;
    countdownEl.appendChild (addCountdownEl);
    }
var countingDown = setInterval(lessTime, 1000);
var addCountdownEl = document.createElement("p");
var gradeEl = document.getElementById("grade")
var addGradeEl = document.createElement("h1");


// array with questions and answers 
let questions = [{
    question : "Commonly used data types DO Not Include:", 
    answers : ["strings", "booleans", "alerts", "numbers"],
    correctAnswer : "alerts"
},
{
    question : "The condition in an if / else statement is enclosed with _________.", 
    answers : ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer : "parenthesis"
},
    {
    question : "Arrays in JavaScript can be used to store ________.", 
    answers : ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer : "all of the above"
},
{
    question : "String values must be enclosed within _______ when being assigned to variables.", 
    answers : ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer : "quotes"
},
{
    question : "A very useful tool used during development and debugging for printing content to the debugger is:", 
    answers : ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer : "console.log"
}];

displayQuestion = function () {
    // clear the old question 
   questionsEl.innerHTML = "";
    answersEl.innerHTML = ""; 
   // display question to user
   var addQuestionEl = document.createElement("h1");
   addQuestionEl.textContent = questions[currentQuestion].question;
   questionsEl.appendChild (addQuestionEl);
 

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        // create all the buttons (with the answers) 
        var newButton = document.createElement("button");
        newButton.textContent = questions[currentQuestion].answers[i];
        answersEl.appendChild (newButton);

        // buttons call "submit answer when clicked" on click submit answer 
        newButton.addEventListener("click", submitAnswer); // not really working, I'm sure.
        }
   // button should know what answer should be , newButton.dataType.answer = "yourAnswer"
}
var submitAnswer = function () {
    console.log(this);
    if (this === questions[currentQuestion].correctAnswer) {
        gradeEl.textContent = "Correct!"
        gradeEl.appendChild (addGradeEl);
        time += 15;
    }
    else if (this !== questions[currentQuestion].correctAnswer) {
        gradeEl.textContent = "Wrong!"
        gradeEl.appendChild (addGradeEl);
        time -= 10;

    }

//submitAnswer = function () {
    // check and see if answer submmitted is correct, if not, take sand out of hourglass, this.dataType.answer should get me the value I'm looking for , if answer is = current index answer... 
    //this.dataType.answer;
    //console.log(this.dataType.yourAnswer);
    //if (this.dataType.answer === questions[currentQuestion].correctAnswer) {
       // console.log("correct!")
    // if the timer is zero, end quiz
   // if (time <= 0) {endQuiz};
   // if (yourAnswer !== questions[currentQuestion].correctAnswer) {
       // time -= 15;
   // }
    if (time > 0) {
        currentQuestion++;
    }
   // if (currentQuestion <= questions.length) {
    if (currentQuestion <= questions.length) {
        displayQuestion();
    }
    // if the timer is not zero , increment to next question in array, and display next question to user
    

}
//}



//dynamically create question
displayQuestion();


// Below this is stuff I tried to get from class
// if score equals zero or we win, we call this endQuiz function
var endQuiz = function() {

}
   // initialEl.innerText = "";
    //questionsEl.innerText = "Enter your initials";
  //  var newTextField = document.createElement("input");
  //  newTextField.id = "initials";
   // var submitButton = document.createElement("button");
  //  submitButton.addEventListener("click", saveScore);
    //questionEl.appendChild(newTextField);
    //

//function saveScore() {
   // var name = document.getElementById("initials").value;
    //leaderBoard = [name, score] // score might change to time or timeLeft

    //localStorage.setItem('leaderBoard', JSON.stringify(leaderboard))}