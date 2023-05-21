// DEPENDENCIES / DOM




// DATA 
var quizId = document.getElementById('quiz');
var resultsId = document.getElementById('results');
var submitButton = document.getElementById('submit');
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



// INITIALIZATION