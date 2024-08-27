// Define a Question interface
interface Question {
    question: string;
    options: string[];
    answer: number; // Index of the correct option
}

// Sample Questions
const questions: Question[] = [
    {
        question: "What is the capital of Palestine?",
        options: ["Jerusalem", "Ramallah", "Gaza", "Hebron"],
        answer: 0
    },
    {
        question: "What is the flag color of Palestine?",
        options: ["Red, White, Black, Green", "Blue, White, Red, Yellow", "Black, Red, Yellow, Green", "White, Red, Green, Blue"],
        answer: 0
    }
];

let score = 0;

function askQuestion(questionObj: Question): void {
    const userAnswer = prompt(`${questionObj.question}\n${questionObj.options.map((opt, i) => `${i + 1}: ${opt}`).join('\n')}`);
    if (parseInt(userAnswer || "0") - 1 === questionObj.answer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${questionObj.options[questionObj.answer]}.`);
    }
}

// Main Quiz Function
function startQuiz(): void {
    questions.forEach(q => askQuestion(q));
    alert(`Quiz finished! Your score is ${score}/${questions.length}`);
}

// Start the Quiz
startQuiz();

  