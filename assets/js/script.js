// global variables 
var questionsArr = [question1, question2, question3]
var question1 = "what?"
var question2 = "why?"
var question3 = "who?"
var questionsEl = document.getElementById("questions")
var currentQuestion = 0
var answersEl = document.getElementById("answers")
//var buttonEl = document.getElementsByName("button")
//let time = 120;
// array with all my questions 
let questions = [{
    question : "Commonly used data types DO Not Include:", 
    answers : ["strings", "booleans", "alerts", "numbers"],
    correctAnswer : [2]
},
{
    question : "The condition in an if / else statement is enclosed with _________.", 
    answers : ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer : [2]
},
    {
    question : "Arrays in JavaScript can be used to store ________.", 
    answers : ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer : [3]
},
{
    question : "String values must be enclosed within _______ when being assigned to variables.", 
    answers : ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer : [2]
},
{
    question : "A very useful too used during development and debugging for printing content to the debugger is:", 
    answers : ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer : [3]
}]

displayQuestion = function () {
    // clear the old question containerElement.innerHtml = "" for both questions and answers
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
        
        }
   // button should know what answer should be , newButton.dataType.answer = "yourAnswer"
}
submitAnswer = function () {
    // check and see if answer submmitted is correct, if not, take sand out of hourglass, this.dataType.answer should get me the value I'm looking for , if answer is = current index answer... 
    this.dataType.yourAnswer;
    console.log(this.dataType.yourAnswer);
    if (this.dataType.yourAnswer === questions[currentQuestion].correctAnswer) {
        console.log("correct!")
    // if the timer is zero, end quiz
    if (yourAnswer !== questions[currentQuestion].correctAnswer) {
        time -= 15;
    }
    currentQuestion++;
    if (currentQuestion <= questions.length) {
        displayQuestion;
    }
    // if the timer is not zero , increment to next question in array, and display next question to user
    


}

//var countdown = function() {
  //  var timeDec = timeDecrement() { 
    //    time--;
    //}
    //setInterval(timeDec, 1000);
    //};
    //countdown();
//console.log(time);

//dynamically create question
displayQuestion()
// event.listen
// right or wrong
// i++

// stuff from TA working with ianosborne

