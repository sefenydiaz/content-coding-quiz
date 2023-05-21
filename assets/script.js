// DEPENDENCIES / DOM




// DATA 
// variables for DOM 
var quizId = document.getElementById('quiz');
var resultsId = document.getElementById('results');
var submitButton = document.getElementById('submit');
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
// function to start quiz
function startQuiz(jsQuestions, quizId, resultsId, submitButton) {

    function showQuestions(jsQuestions, quizId){

    }

    function showResults(jsQuestions, quizId, resultsId) {

    }

    showQuestions(jsQuestions, quizId);

    submitButton.onclick = function() {
        showResults(jsQuestions, quizId, resultsId );
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


// INITIALIZATION