
const questions = [
    {
        question:" which is largest naimal in the world?",
        answer:[
            {text: "shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Tiger", correct: false},
            {text: "Fish", correct: false},
        ]
    },
    {
        question:"Who is the prime minister of Bangladesh?",
        answer:[
            {text: "Shakuk Khan", correct: false},
            {text: "Khlada", correct: false},
            {text: "Shak Hasina", correct: true},
            {text: "Fasla Kabir", correct: false},
        ] 
    },
    {
        question:"What is the answer of 8+10=?",
        answer:[
            {text: "14", correct: false},
            {text: "32", correct: false},
            {text: "2", correct: false},
            {text: "18", correct: true},
        ]
    },
    {
        question:" What is the name of biggest country?",
        answer:[
            {text: "Russia", correct: true},
            {text: "America", correct: false},
            {text: "Bangladesh", correct: false},
            {text: "Fish", correct: false},
        ]
    }
];


// question section end using array method----------



const questionElemnet = document.querySelector('#question');
const answerButtons = document.querySelector('#ans-button');
const nextButton = document.querySelector('#next-btn');

//  geting the requried element using const variable;

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElemnet.innerHTML = questionNo + "."+ currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}
function resetState(){
    nextButton.computedStyleMap.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectAnswer = e.target
    const isCorrect = selectAnswer.dataset.correct === "true";
    if(isCorrect){
        selectAnswer.classList.add('correct');
        score++;
    }else{
        selectAnswer.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElemnet.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = " play again";
    nextButton.style.display = " block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuize();
    }
})

startQuize();
