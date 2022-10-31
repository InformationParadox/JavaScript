const quizData = [
    {
        question: "What is the most used programming language in 2022?",
        a: "Java",
        b : "Python",
        c : "C++",
        d : "Javascript",
        correct : "d",
    },
    {
        question: "Javascript is a ____side programming language?",
        a: "Client",
        b : "Server",
        c : "Both",
        d : "None",
        correct : "c",
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Oriented Notation",
        b : "JavaScript Object Notation",
        c : "JavaScript Online Notation",
        d : "JavaScript Oblique Notation",
        correct : "b",
    },
    {
        question: "To convert string to number, which function do we use ?",
        a: "ParseNumber",
        b : "ParseInt",
        c : "ParseString",
        d : "ParseDouble",
        correct : "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1993",
        b : "1994",
        c : "1995",
        d : "1996",
        correct : "c",
    },
];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerElement = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz ();

function loadQuiz () {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    // console.log(currentQuizData);

    questionElement.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//radio button ko lagi check garirako
function getSelected() {
    let answer = undefined;

    answerElement.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
            // console.log(answer);
        }
    });
    return answer;
}

function deselectAnswers () {

    answerElement.forEach((answerEl) => {
        if(answerEl.checked){
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener("click", () => {

    //check the answer 
    const answer = getSelected();

    if(answer){

        if(answer === quizData[currentQuiz].correct ){
            score++;
            // console.log(score);
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
    
        else {
            // show results
            alert("You have Finished! Thankyou");

            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            
            <button onclick="location.reload()">Reload</button> `;
        }
    }
    
});