// DEPENDENCIES / DOM
// variable for timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtnEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var ans1El = document.getElementById("ans1");
var ans2El = document.getElementById("ans2");
var ans3El = document.getElementById("ans3");
var ans4El = document.getElementById("ans4");
var welcome = document.getElementById("welcome");
// DATA 
// variables for DOM 
var quizId = document.getElementById('quiz');
var resultsId = document.getElementById('results');
// add event listener ?
var submitButton = document.getElementById('submit')
var secondsLeft = 60;
// variable for quiz questions
var jsQuestions = [
    {
        // COME UP WITH QUESTION 1 !!
        question: "The condition in an if / else statement is enclosed with ____________.",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parantheses',
            d: 'square brackets'
        },
        correctAnswer: 'c'
    },
    {
        // COME UP WITH QUESTION 2 !!!
        question: "Arrays in JavaScript can be used to store ______________.",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays',
            c: 'booleans',
            d: 'all of the above',
        },
        correctAnswer: 'd'
    },
    {
        // COME UP WITH QUESTION 3 !!!
        question: "String values must be enclosed within ___________ when being assigned to variables.",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parantheses',
        },
        correctAnswer: 'c'
    },
    {
        // COME UP WITH QUESTION 4 !!!
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'for loops',
            d: 'console log',
        },
        correctAnswer: 'd'
    },
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers',
        },
        correctAnswer: 'c'
    }
];

var questionIndex = 0


// FUNCTIONS 
// function to start timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        // add an if statement to deduct 10 seconds for wrong answer
        // if(correctAnswer === false) {
        //     timeEl.textContent = (secondsLeft - 10) + "seconds remaining.";
        //     timeEl.textContent = alert("Incorrect!");
      
        // }
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
function startQuiz() {
    welcome.classList.add("hidden")
    quizId.classList.remove("hidden")
    showQuestion()



    // function showResults(jsQuestions, quizId, resultsId) {

    // }



}

// function to show questions for user
function showQuestion(){
    var currentQuestion = jsQuestions[questionIndex]
       questionEl.textContent = currentQuestion.question
       ans1El.textContent = currentQuestion.answers.a
       ans2El.textContent = currentQuestion.answers.b
       ans3El.textContent = currentQuestion.answers.c
       ans4El.textContent = currentQuestion.answers.d
    // var output = [];
    // var answers; 

    // for(var i=0; i<jsQuestions.length; i++){
    //     answers = [];
    //     for(letter in jsQuestions[i].answers){
    //         answers.push(
    //             '<label>'
    //                 + '<input type="radio" name="question'+i+'"value="'+letter+'">'
    //                 + letter + ': '
    //                 + jsQuestions[i].answers[letter]
    //                 + '</label>'
    //         );
    //     }

    //     output.push(
    //         '<div class="question">' + jsQuestions[i].question + '</div>'
    //         + '<div class="answers">' + answers.join('') + '</div>'
    //     );
    // }

    // quizId.innerHTML = output.join('');
}

///showQuestions(jsQuestions, quizId);

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
function checkAnswer(event) {
    console.log(event.target.textContent)
    var currentQuestion = jsQuestions[questionIndex]
    if(currentQuestion.correctAnswer === event.target.textContent){
        console.log('correct!')
    } else{
        console.log('incorrect!')
        // add code to deduct time from timer from incorrect answers
        //timeEl.textContent = (secondsLeft - 10) + "seconds remaining.";
       // timeEl.textContent = alert("Incorrect!");
      
        }
        questionIndex++
        showQuestion();
    }
    
// starts the quiz using the start button
startBtnEl.addEventListener('click', function(){
    setTime();
    startQuiz();
})
// listens for a click to check correct answer
ans1El.addEventListener('click', checkAnswer)
ans2El.addEventListener('click', checkAnswer)
ans3El.addEventListener('click', checkAnswer)
ans4El.addEventListener('click', checkAnswer)
// INITIALIZATION
