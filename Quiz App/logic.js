let flag = document.getElementById("flag");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let show = document.getElementById("showScore");
let ques = document.getElementById("ans");
let retrybtn = document.getElementById("retry");
let nextbtn = document.getElementById("next");
let answers = document.querySelectorAll(".radiobtn");
let score = document.getElementById("score");
let yourans = [];
let yourans1 = document.getElementById("yourans1");
let yourans2 = document.getElementById("yourans2");
let yourans3 = document.getElementById("yourans3");
let yourans4 = document.getElementById("yourans4");
let yourans5 = document.getElementById("yourans5");
let questionCount = 0;
let totalPoints = 0;

const countries = [
    { flag: "germany", a: "Belgium", b: "Brazil", c: "Germany", d: "Berlin", ans: "opt_c" },
    { flag: "qatar", a: "Egypt", b: "Qatar", c: "Morocco", d: "U.A.E.", ans: "opt_b" },
    { flag: "southafrica", a: "South Africa", b: "Uruguay", c: "Berlin", d: "Mongolia", ans: "opt_a" },
    { flag: "srilanka", a: "Srilanka", b: "Maldives", c: "Afghanistan", d: "Myanmar", ans: "opt_a" },
    { flag: "spain", a: "France", b: "Italy", c: "Poland", d: "Spain", ans: "opt_d" },
];

function deselectAnswers() {
    answers.forEach((c) => {
        if (c.checked) {
            c.checked = false;
        }
    });
}

function checkAnswer() {
    let answer;
    answers.forEach((currentAnswer) => {
        if (currentAnswer.checked) {
            answer = currentAnswer.id;
        }
    });
    return answer;
}

function showSubmitPage() {
    score.innerText = totalPoints;
    show.classList.remove("none");
    ques.classList.replace("answer", "none");
    retrybtn.classList.remove("none");
    nextbtn.classList.add("none");
}

function loadQuestion() {
    deselectAnswers();
    // let randomNumber = Math.floor(Math.random() * countries.length);
    flag.setAttribute("src", "images/" + countries[questionCount].flag + ".png");
    option1.innerText = countries[questionCount].a;
    option2.innerText = countries[questionCount].b;
    option3.innerText = countries[questionCount].c;
    option4.innerText = countries[questionCount].d;
}

nextbtn.addEventListener("click", () => {
    // console.log("hello");
    const a = checkAnswer();

    // yourans[questionCount] = document.getElementById(checkAnswer()).textContent;
    // console.log(yourans[questionCount]);
    // console.log(a);
    if (a === countries[questionCount].ans) totalPoints++;
    questionCount++;
    // console.log(questionCount);

    if (questionCount > 4) {
        showSubmitPage();
    } else {
        loadQuestion();
    }
});

loadQuestion();

retrybtn.addEventListener("click", () => {
    location.reload();
});
