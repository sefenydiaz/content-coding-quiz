// DEPENDENCIES / DOM




// DATA 
var quizId = document.getElementById('quiz');
var resultsId = document.getElementById('results');
var submitButton = document.getElementById('submit');



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