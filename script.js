document.addEventListener("DOMContentLoaded", function () {
const questions = [
    {
        question : "What does the #define directive in C do?",
         answers : [
                {text : "Includes a header file",correct:true},
                {text : "Declares a variable",correct:false},
                {text : "Defines a macro",correct:false},
                {text : "Declares a function",correct:false}
            ]
    },
    {
        question : "Which of the following data types in C is used to store a single character?",
         answers : [
                {text : "int",correct:false},
                {text : "char",correct:true},
                {text : "fload",correct:false},
                {text : "double",correct:false}
            ]
    },
    {
        question : "What is the value of sizeof(int) in C?",
         answers : [
                {text : "2 bytes",correct:false},
                {text : "4 bytes",correct:true},
                {text : "8 bytes",correct:false},
                {text : "Depends on system",correct:false}
            ]
    },
    {
        question : "What does the break statement do in a C program?",
         answers : [
                {text : "Exits the program",correct:false},
                {text : "Continues to the next iteration of the loop",correct:false},
                {text : "Exits the current loop or switch statement",correct:true},
                {text : "None of the above",correct:false}
            ]
    },
    {
        question : "What is the correct syntax to declare a pointer to an integer in C?",
         answers : [
                {text : "integer *ptr;",correct:false},
                {text : "ptr integer;",correct:false},
                {text : "pointer int ptr;",correct:false},
                {text : "int* ptr;",correct:true}
            ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.querySelector(".answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

  // answerButton[0].innerHTML = "";

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});

startQuiz();
});