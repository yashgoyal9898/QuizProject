const quizData = [{
        question: "Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        correct: "d",
    },
    {
        question: "In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        correct: "b",
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: " Throws an error",
        d: "Ignores the statements",
        correct: "d",
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        correct: "d",
    },
    {
        question: "Which of the following type of a variable is volatile?",
        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "HImmutable variable",
        correct: "b",
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        correct: "c",
    },
    {
        question: "Which of the following number object function returns the value of the number?",
        a: "toString()",
        b: "valueOf()",
        c: "toLocaleString()",
        d: "toPrecision()",
        correct: "b",
    },
    {
        question: "In JavaScript, what will be used for calling the function definition expression:",
        a: "Function prototype",
        b: "Function literal",
        c: "Function calling",
        d: "Function declaration",
        correct: "b",
    },
    {
        question: "Which of the following one is the property of the primary expression:",
        a: "Contains only keywords",
        b: "basic expressions containing all necessary functions",
        c: "contains variable references alone",
        d: "stand-alone expressions",
        correct: "d",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
            <br/>
            <button><a href="../Home.html" class="btn btn-primary"
            >Back to Home Page</a</button>
            
        </div>
    `

}
loadQuestion(index);