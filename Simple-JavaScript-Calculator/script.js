const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener("click", calculate);
})

function calculate(event) {
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === "=") {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        display.value = "";
    } else {
        display.value += clickedButtonValue;
    }
}
/**
 * 1- puxar Todos os botões
 * 2- puxar nosso display = input text
 * 3- fazer um forEach adicionando um evento a cada botão
 * 4- nossa função deve ter um parâmetro event
 * 5- criar uma constante para segurar o valor do evento atual
 * 6- fazer um if statment se o botão clicado for identico ao = e outro if vendo se o display value Não está vazio
 * 7- entao calculamos usando o eval();
 * 8- else if, se o botão clicado for identico a C então limpamos o valor do display
 * 9- else concatenamos o display value com o clickedbutton
 * **/
