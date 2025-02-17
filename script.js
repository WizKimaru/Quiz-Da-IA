const quizData = [
    {
        question: "O que define a Inteligência Artificial?",
        options: ["Realizar tarefas repetitivas", "Simular inteligência humana", "Processar grandes volumes de dados", "Criar emoções em máquinas"],
        answer: 1,
        explanation: "A IA simula a inteligência humana para resolver problemas e aprender com dados.",
    },
    {
        question: "Quais capacidades a IA desenvolve?",
        options: ["Raciocínio, aprendizado e percepção", "Análise de dados e automatização", "Interação com seres humanos", "Simulação de emoções"],
        answer: 0,
        explanation: "A IA envolve raciocínio, aprendizado e percepção para resolver problemas complexos.",
    },
    {
        question: "Qual o impacto da IA na indústria?",
        options: ["Aumenta a produção e reduz custos", "Substitui trabalho humano", "Desenvolve produtos personalizados", "Substitui controle de qualidade"],
        answer: 0,
        explanation: "A IA melhora a eficiência na produção, reduzindo custos e automatizando processos repetitivos.",
    },
    {
        question: "O que faz o aprendizado de máquina (Machine Learning)?",
        options: ["Substitui a análise humana", "Segue regras fixas", "Prevê com dados sem programação explícita", "Cria novos dados"],
        answer: 2,
        explanation: "O aprendizado de máquina permite que as máquinas façam previsões baseadas em dados sem instruções detalhadas.",
    },
    {
        question: "Como a IA é usada na saúde?",
        options: ["Analisando exames para diagnósticos personalizados", "Automatizando processos administrativos", "Criando vacinas", "Controlando robôs cirúrgicos"],
        answer: 0,
        explanation: "Na saúde, a IA é usada para analisar exames médicos e ajudar no diagnóstico e tratamento.",
    },
    {
        question: "Como a IA ajuda nas decisões empresariais?",
        options: ["Recomendações automáticas", "Elimina análise humana", "Faz previsões sem dados", "Fornece insights valiosos a partir de dados fornecidos"],
        answer: 3,
        explanation: "A IA acelera decisões analisando grandes volumes de dados para gerar insights estratégicos.",
    },
    {
        question: "Quais são as tendências futuras da IA?",
        options: ["Computação quântica e IA explicável e generativa", "IA para automação completa", "Máquinas com inteligência superior", "Robôs autônomos em todas as áreas"],
        answer: 0,
        explanation: "As tendências incluem computação quântica e IA explicável para maior transparência e eficiência.",
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

    let message = "";
    let bgColor = "";
    let messageColor = "";

    if (score <= 3) {
        message = "Não desista! A prática leva à perfeição. Tente novamente!";
        messageColor = "red";  // Vermelho para desempenho ruim
    } else if (score >= 4 && score <= 5) {
        message = "Muito bom! Você tem um bom conhecimento sobre IA, continue estudando!";
        messageColor = "orange";  // Laranja para desempenho mediano
    } else if (score > 5) {
        message = "Excelente! Você é um mestre da Inteligência Artificial!";
        messageColor = "green";  // Verde para bom desempenho
    }

    // Ajustando o fundo da página de acordo com o desempenho
    document.body.style.backgroundColor = bgColor;
    resultContainer.innerHTML = `
        <p style="color: black;">Você acertou ${score} de ${quizData.length} perguntas!</p>
        <p style="color: ${messageColor};">${message}</p>
    `;
}

submitButton.addEventListener("click", submitQuiz);

// Iniciar quiz
loadQuestion();
