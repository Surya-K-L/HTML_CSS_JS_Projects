const questions = [
    {
        question: "Which of the following option leads to the portability and security of Java?",
        answers:[
            {text: "Bytecode is executed by JVM",correct:true},
            {text: "The applet makes the Java code secure and portable",correct:false},
            {text: "Use of exception handling",correct:false},
            {text: "Dynamic binding between objects",correct:false},
        ]
    },
    {
        question: "Which of the following is not a Java features?",
        answers:[
            {text: "Dynamic",correct:false},
            {text: "Architecture Neutral",correct:false},
            {text: "Use of pointers",correct:true},
            {text: "Object-oriented",correct:false},
        ]
    },
    {
        question: "Which is used to find and fix bugs in the Java programs.",
        answers:[
            {text: "JVM",correct:false},
            {text: "JRE",correct:false},
            {text: "JDK",correct:false},
            {text: "JDB",correct:true},
        ]
    },
    {
        question: "The concept of encapsulation helps in writing which type of classes in the Java programming language?",
        answers:[
            {text: "Abstract classes",correct:false},
            {text: "Wrapper classes",correct:false},
            {text: "Mutable classes",correct:false},
            {text: "Immutable classes",correct:true},
        ]
    },
    {
        question: "What does the expression float a = 35 / 0 return?",
        answers:[
            {text: "0",correct:false},
            {text: "Not a Number",correct:false},
            {text: "Infinity",correct:true},
            {text: "Run time exception",correct:false},
        ]
    },
    {
        question: " Which feature of OOPS derives the class from another class?",
        answers:[
            {text: "Inheritance",correct:true},
            {text: "Data Hiding",correct:false},
            {text: "Encapsulation",correct:false},
            {text: "Polymorphism",correct:false},
        ]
    },
    {
        question: "An interface with no fields or methods is known as a_______",
        answers:[
            {text: "Runnable Interface",correct:false},
            {text: "Marker Interface",correct:true},
            {text: "Abstract Interface",correct:false},
            {text: "CharSequence Interface",correct:false},
        ]
    },
    {
        question: "In which memory a String is stored, when we create a string using new operator?",
        answers:[
            {text: "Stack",correct:false},
            {text: "String memory",correct:false},
            {text: "Heap memory",correct:true},
            {text: "Random storage space",correct:false},
        ]
    },
    {
        question: "Which two features of object-oriented programming are the same?",
        answers:[
            {text: "Abstraction and Polymorphism features are the same",correct:false},
            {text: "Inheritance and Encapsulation features are the same",correct:false},
            {text: "Encapsulation and Polymorphism features are the same",correct:false},
            {text: "Encapsulation and Abstraction",correct:true},
        ]
    },
    {
        question: "Which of the following class is known as the generic class?",
        answers:[
            {text: "Final class",correct:false},
            {text: "Template class",correct:true},
            {text: "Abstract class",correct:false},
            {text: "Efficient code",correct:false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});

startQuiz();
