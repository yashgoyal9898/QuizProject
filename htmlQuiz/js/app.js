const quizData = [{
        question: "Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        a: "<br>",
        b: "<a>",
        c: " <pre>",
        d: "<b>",
        correct: "a",
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<i>",
        correct: "a",
    },
    {
        question: "<input> is -",
        a: "a format tag.",
        b: "an empty tag.",
        c: "All of the above",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        correct: "d",
    },
    {
        question: "Which of the following tag is used to define options in a drop-down selection list?",
        a: "<select>",
        b: "<list>",
        c: "<dropdown>",
        d: "<option>",
        correct: "d",
    },
    {
        question: "The <hr> tag in HTML is used for -",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        correct: "d",
    },
    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        a: "<marquee>",
        b: "<scroll>",
        c: "<div>",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following HTML tag is the special formatting tag?",
        a: "<p>",
        b: "<b>",
        c: "<pre>",
        d: "None of the above",
        correct: "c",
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
            <button><a href="../Home.html" class="btn btn-primary"
            >Back to Home Page</a</button>
        </div>
    `
}
loadQuestion(index);