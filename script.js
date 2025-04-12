const question = [
    {
        question:"which is largest animal in the world?",
        answers:[

            {text:"shark",correct: false},
            {text:"blue whale",correct: true},
            {text:"Elephant",correct: false},
            {text:"Giraffe",correct: false},

        ]
    },
    {
        question:"which is smallest country in the world?",
        answers:[

            {text:" Vatican City",correct: true},
            {text:"Monaco",correct: false},
            {text:"Nauru",correct: false},
            {text:"Tuvalu",correct: false},
        ]
    },
    {
        question:"which is the largest desert in the world?",
        answers:[

            {text:" Arabian Desert",correct: false},
            {text:"Sahara Desert",correct: false},
            {text:"Arctic Desert",correct: false},
            {text:" Antarctic Desert",correct: true},
        ]  
    },
    {
        question:"which is the largest country in the world?",
        answers:[ 

            {text:"India",correct: false},
            {text:"China",correct: false},
            {text:"Russia",correct: true},
            {text:"the United States",correct: false},
        ]  
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");



let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuesion();
}

function showQuesion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuesion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
});

StartQuiz()