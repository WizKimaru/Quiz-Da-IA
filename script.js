const quizData = [
    {
        question: "O que é Inteligência Artificial (IA)?",
        options: ["Máquinas que imitam comportamento humano", "Computadores com superpoderes", "Sistemas de segurança avançados", "Robôs com emoções"],
        answer: 0
    },
    {
        question: "Quem é considerado um dos pioneiros da IA?",
        options: ["Albert Einstein", "Alan Turing", "Isaac Newton", "Nikola Tesla"],
        answer: 1
    },
    {
        question: "Qual é a principal técnica usada em aprendizado de máquina?",
        options: ["Algoritmos genéticos", "Redes neurais", "Programação lógica", "Algoritmos de busca"],
        answer: 1
    },
    {
        question: "O que é um 'chatbot'?",
        options: ["Um programa de IA que conversa com seres humanos", "Uma máquina para fazer café", "Um assistente virtual", "Uma IA que faz previsões"],
        answer: 0
    },
    {
        question: "O que é 'deep learning'?",
        options: ["Uma técnica de IA que usa grandes redes neurais", "Uma forma de aprendizado sem supervisão", "Uma IA que consegue aprender sozinha", "Uma técnica de IA para reconhecimento de fala"],
        answer: 0
    },
    {
        question: "O que é um 'algoritmo' em Inteligência Artificial?",
        options: ["Um conjunto de dados", "Uma fórmula matemática", "Uma série de instruções para resolver problemas", "Um hardware especializado"],
        answer: 2
    },
    {
        question: "Qual é o nome do teste que avalia se uma máquina possui inteligência semelhante à humana?",
        options: ["Teste de Turing", "Teste de IA", "Teste de Comportamento", "Teste de Reconhecimento"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    questionElement.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options
            .map(
                (option, index) => `
            <label>
                <input type="radio" name="question${currentQuestion}" value="${index}">
                ${option}
            </label>
        `
            )
            .join("")}
    `;
    
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === quizData[currentQuestion].answer) {
            score++;
        }
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add("hidden");
    submitButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

submitButton.addEventListener("click", submitQuiz);

// Iniciar quiz
loadQuestion();

function showResult() {
    quizContainer.classList.add("hidden");
    submitButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    let message = "";
    let bgColor = "";

    if (score <= 3) {
        message = "Não desista! A prática leva à perfeição. Tente novamente!";
    } else if (score >= 4 && score <= 5) {
        message = "Muito bom! Você tem um bom conhecimento sobre IA, continue estudando!";
    } else if (score > 5) {
        message = "Excelente! Você é um mestre da Inteligência Artificial!";
    }

    document.body.style.backgroundColor = bgColor;
    resultContainer.innerHTML = `<p>Você acertou ${score} de ${quizData.length} perguntas!</p><p>${message}</p>`;
    
}
