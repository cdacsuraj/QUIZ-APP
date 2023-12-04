const questions =[{
    'que': 'Which of the following is a markup language ? ',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'Correct': 'a'
},
{
    'que': 'Which of the following is a Scripting language ? ',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'Correct': 'c'
},
{
    'que': 'Which of the following is a Pure Object Oriented Programming language ? ',
    'a': 'SmallTalk',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'Correct': 'c'
}
] 
let index = 0;
let total = questions.length;
let correct = 0, wrong = 0, right = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText =`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
         optionInputs.forEach(
            (input) => {
                 input.checked = false;
            }
        )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3>Thank you for Quiz</h3>
        <h2>${right} / ${total} are correct</h2>
    `
}
loadQuestion();