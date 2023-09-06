document.addEventListener("DOMContentLoaded", function () {
const questions = [
    {
        question : `#include <stdio.h>
        int main() {
            int x = 10;
            if (x = 5) {
                printf("True");
            } else {
                printf("False");
            }
            return 0;
        }
        `,
         answers : [
                {text : "True",correct:true},
                {text : "False",correct:false},
                {text : "Compile Error",correct:false},
                {text : "Runtime Error",correct:false}
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
                {text : "Depens on system",correct:false}
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
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


startQuiz();
});