const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        answer: "Shakespeare"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    // Add more questions here up to 100
    {
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Diamond", "Iron", "Steel"],
        answer: "Diamond"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Tim Berners-Lee"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["3.0 x 10^8 m/s", "2.5 x 10^8 m/s", "1.0 x 10^8 m/s", "1.5 x 10^8 m/s"],
        answer: "3.0 x 10^8 m/s"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1900", "1912", "1898", "1920"],
        answer: "1912"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        answer: "Shakespeare"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Diamond", "Iron", "Steel"],
        answer: "Diamond"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        answer: "Shakespeare"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    }
    // You can continue adding questions until you reach 100
];

// Initialize the quiz
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = '';
    
    questionData.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = function () {
            checkAnswer(option);
        };
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    if (selectedOption === correctAnswer) {
        score++;
    }
    
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result");
    document.getElementById("score").innerText = score;
    resultContainer.style.display = "block";
    document.getElementById("next-button").style.display = "none";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").style.display = "none";
    loadQuestion();
    document.getElementById("next-button").style.display = "none";
}

document.addEventListener("DOMContentLoaded", loadQuestion);
