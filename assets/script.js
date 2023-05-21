// DEPENDENCIES / DOM
// variable for timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");


// DATA 
// variables for DOM 
var quizId = document.getElementById('quiz');
var resultsId = document.getElementById('results');
var submitButton = document.getElementById('submit').addEventListener("click", showResults);
var secondsLeft = 60;
// variable for quiz questions
var jsQuestions = [
    {
        // COME UP WITH QUESTION 1 !!
        question: "JS question 1",
        answers: {
            a: 'a',
            b: 'b',
            c: 'c',
        },
        correctAnswer: 'b'
    },
    {
        // COME UP WITH QUESTION 2 !!!
        question: "JS question 2",
        answers: {
            a: 'a',
            b: 'b',
            c: 'c',
        },
        correctAnswer: 'a'
    },
    {
        // COME UP WITH QUESTION 3 !!!
        question: "JS question 3",
        answers: {
            a: 'a',
            b: 'b',
            c: 'c',
        },
        correctAnswer: 'c'
    },
    {
        // COME UP WITH QUESTION 4 !!!
        question: "JS question 4",
        answers: {
            a: 'a',
            b: 'b',
            c: 'c',
        },
        correctAnswer: 'a'
    }
];



// FUNCTIONS 
// function to start timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000); // <-- number of miliseconds between intervals
}

function sendMessage() {
 timeEl.textContent = "You're done!! Now go take a nap!";
 var imgEl = document.createElement("img");
 imgEl.setAttribute("src", "assets/images/sleeping cat.png")
 mainEl.appendChild(imgEl);
}
// function to start quiz
function startQuiz(jsQuestions, quizId, resultsId, submitButton) {

    function showQuestions(jsQuestions, quizId){

    }

    function showResults(jsQuestions, quizId, resultsId) {

    }

    showQuestions(jsQuestions, quizId);

    submitButton.onclick = function() {
        showResults(jsQuestions, quizId, resultsId);
    }
}

// function to show questions for user
function showQuestions(jsQuestions, quizId){
    var output = [];
    var answers; 

    for(var i=0; i<jsQuestions.length; i++){
        answers = [];
        for(letter in jsQuestions[i].answers){
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'"value="'+letter+'">'
                    + letter + ': '
                    + jsQuestions[i].answers[letter]
                    + '</label>'
            );
        }

        output.push(
            '<div class="question">' + jsQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    quizId.innerHTML = output.join('');
}

showQuestions(jsQuestions, quizId);

// function to show correct results 
function showResults(jsQuestions, quizId, resultsId){
    var answerClass = quizId.querySelectorAll('.answers');
    var userAnswer = '';
    var numberCorrect = 0;

    for(var i=0; i<jsQuestions.length; i++){
       userAnswer =  (answerClass[i].querySelector('input[name=question'+i+']:checked')||{}).value;

       if(userAnswer===jsQuestions[i].correctAnswer){
        numberCorrect++;

        answerClass[i].style.color = 'palevioletred';
       }
       else{
        answerClass[i].style.color = 'lightblue';
       }
    }

    resultsId.innerHTML = numberCorrect + ' out of ' + jsQuestions.length;
}


// INITIALIZATION
setTime();
startQuiz(jsQuestions, quizId, resultsId, submitButton);