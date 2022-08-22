const input = document.querySelector('input')
const button = document.querySelector('button');
const icon = document.querySelector('#icon');
const validate = document.querySelector('.validate');
const errorMsg = document.querySelector('.errorMsg');


const answersArr = [
    'Hmm provavelmente não', 'Talvez um dia...', 'Com certeza não.', 'Sim claro!', 'Sim!', 'Claro que não.'
];

button.addEventListener('click', revealDestiny);
input.addEventListener('click', appearAnswerBox);
icon.addEventListener('click', randomDestiny);

function revealDestiny() {

    if (input.value.length === 0) {
        alert('Você deve fazer uma pergunta para ter sua resposta!');
    } else {
        input.setAttribute('disabled', '');
        button.setAttribute('disabled', '');
        const randomNumber = Math.floor(Math.random() * (answersArr.length));
        answers.classList.add('fade-in-text');
        document.getElementById('answers').innerHTML = answersArr[randomNumber];
        button.innerHTML = 'Clique no olho e o fará te enxergar';
        input.value = '';
    }
}

function appearAnswerBox() {
    answers.classList.add('fade-in-box');
    answers.style.visibility = 'visible';
}

function randomDestiny() {
    if (input.disabled === true) {
        document.querySelector('h2').innerHTML = "Você é digno!!";
        document.querySelector('p').innerHTML = "Você merece ter mais 2 perguntas respondidas!";

        document.body.classList.toggle('worthy');
        newGame();
    } else {
        document.body.classList.toggle('notWorthy');
    }

}


input.addEventListener('keydown', function () {

    if (input.value.length < input.minLength) {
        errorMsg.classList.add("fade-in-text");
        errorMsg.classList.remove('invisible');
        button.setAttribute('disabled', '');
    } else {
        errorMsg.classList.add('invisible');
        button.disabled = false;
    }
});



function newGame() {
    button.setAttribute('enabled', '');
    button.innerHTML = "Fazer Pergunta"
}