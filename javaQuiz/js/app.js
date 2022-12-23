const quizData = [{
        question: "Which of the following option leads to the portability and security of Java?",
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        correct: "a",
    },
    {
        question: "Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Object-oriented",
        correct: "c",
    },
    {
        question: " _____ is used to find and fix bugs in the Java programs.",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        correct: "d",
    },
    {
        question: "What is the return type of the hashCode() method in the Object class?",
        a: "Object",
        b: "int",
        c: "long",
        d: "void",
        correct: "b",
    },
    {
        question: "What does the expression float a = 35 / 0 return?",
        a: "0",
        b: "Not a Number",
        c: "Infinity",
        d: "Run time exception",
        correct: "c",
    },
    {
        question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        a: "javap tool",
        b: "javaw command",
        c: "Javadoc tool",
        d: "javah command",
        correct: "c",
    },
    {
        question: "In which process, a local variable has the same name as one of the instance variables?",
        a: "Serialization",
        b: "Variable Shadowing",
        c: "Abstraction",
        d: "Multi-threading",
        correct: "b",
    },
    {
        question: "Which of the following is true about the anonymous inner class?",
        a: "It has only methods",
        b: "Objects can't be created",
        c: "It has a fixed class name",
        d: "It has no class name",
        correct: "d",
    },
    {
        question: "Which package contains the Random class?",
        a: "java.util package",
        b: "java.lang package",
        c: "java.awt package",
        d: "java.io package",
        correct: "a",
    },
    {
        question: "What do you mean by nameless objects?",
        a: "An object created by using the new keyword.",
        b: "An object of a superclass created in the subclass.",
        c: "An object without having any name but having a reference.",
        d: "An object that has no reference.",
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