// Sample Questions
var questions = [
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
var score = 0;
function askQuestion(questionObj) {
    var userAnswer = prompt("".concat(questionObj.question, "\n").concat(questionObj.options.map(function (opt, i) { return "".concat(i + 1, ": ").concat(opt); }).join('\n')));
    if (parseInt(userAnswer || "0") - 1 === questionObj.answer) {
        score++;
        alert("Correct!");
    }
    else {
        alert("Wrong! The correct answer is ".concat(questionObj.options[questionObj.answer], "."));
    }
}
// Main Quiz Function
function startQuiz() {
    questions.forEach(function (q) { return askQuestion(q); });
    alert("Quiz finished! Your score is ".concat(score, "/").concat(questions.length));
}
// Start the Quiz
startQuiz();
