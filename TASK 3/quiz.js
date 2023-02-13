const quizData = [{
    question: "What is the full form of HTML?",
    a: "Hyper Text Manual Language",
    b: "Hyper Text Modern Logic",
    c: "Hyper Text Markup Language",
    d: "High Text Markup Language",
    correct: "c",
},
{
    question: "How can we change the background color of an element?",
    a: "background-color",
    b: "color",
    c: "Both a and b",
    d: "None of the above",
    correct: "a",
},
{
    question: "The CSS property used to control the element's font-size is",
    a: "text-style",
    b: "text-size",
    c: "font-size",
    d: "None of the above",
    correct: "c",
},
{
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
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
        <h3 class="w-100"> SCORE: ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);