const quizData = [{
        question: "Which of the following is the correct syntax for referring the external style sheet?",
        a: "<style src = example.css>",
        b: '<style src = "example.css" >',
        c: "<stylesheet> example.css </stylesheet>",
        d: '<link rel="stylesheet" type="text/css" href="example.css">',
        correct: "d",
    },
    {
        question: "The property in CSS used to change the background color of an element is?",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "The CSS property used to control the element's font-size is -?",
        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
    {
        question: "The HTML attribute used to define the internal stylesheet is -",
        a: "<style>",
        b: "style",
        c: "<link>",
        d: "<script>",
        correct: "a",
    },
    {
        question: "Which of the following CSS property is used to set the background image of an element?",
        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        a: "padding-left",
        b: "padding-right",
        c: "padding",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "Are the negative values allowed in padding property?",
        a: "Yes",
        b: " No",
        c: "Can't say",
        d: "May be",
        correct: "b",
    },
    {
        question: "The CSS property used to specify the transparency of an element is",
        a: "opacity",
        b: "filter",
        c: "visibility",
        d: "overlay",
        correct: "a",
    },
    {
        question: " The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        a: "writing-mode",
        b: "text-indent",
        c: "word-break",
        d: "None of the above",
        correct: "a",
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