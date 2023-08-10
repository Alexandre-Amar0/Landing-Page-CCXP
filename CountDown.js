const dataEventoTemp = "1 dec 2023"
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

function countDown(){
    const hoje = new Date()
    const dataEventoFinal = new Date(dataEventoTemp)
    const segundosTotais = (dataEventoFinal - hoje)/1000
    
    const diaFinal = Math.floor(segundosTotais / 60 / 60 / 24)
    const horaFinal = Math.floor(segundosTotais / 60 / 60) % 24
    const minutoFinal = Math.floor(segundosTotais / 60) % 60
    const segundoFinal = Math.floor (segundosTotais) % 60
    
    dia.innerHTML = formatoTempo(diaFinal, "D")
    hora.innerHTML = formatoTempo(horaFinal, "H")
    minuto.innerHTML = formatoTempo(minutoFinal, "M")
    segundo.innerHTML = formatoTempo(segundoFinal, "S")
}

function formatoTempo(tempo, tempoCaracter){
    if (tempo < 10) {
        return `0${tempo}${tempoCaracter}`
    } else {
        return `${tempo}${tempoCaracter}`
    }
}

countDown()
setInterval(countDown, 1000)

function highlightCard(selector) {
    var element = document.querySelector(selector)
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}

function addKeyboardEventListeners(){
    document.addEventListener('keydown', (event) => {
        var ticket1 = document.getElementById("quinta")
        var ticket2 = document.getElementById("sexta")
        var ticket3 = document.getElementById("sabado")
        var ticket4 = document.getElementById("domingo")

        var code = event.code;
        if (code == 'Digit1'){
            ticket1.classList.toggle("card-highlight");
            ticket2.classList.remove("card-highlight");
            ticket3.classList.remove("card-highlight");
            ticket4.classList.remove("card-highlight");
        }
        if (code == 'Digit2'){
            ticket1.classList.remove("card-highlight");
            ticket2.classList.toggle("card-highlight");
            ticket3.classList.remove("card-highlight");
            ticket4.classList.remove("card-highlight");
        }1
        if (code == 'Digit3'){
            ticket1.classList.remove("card-highlight");
            ticket2.classList.remove("card-highlight");
            ticket3.classList.toggle("card-highlight");
            ticket4.classList.remove("card-highlight");
        }
        if (code == 'Digit4'){
            ticket1.classList.remove("card-highlight");
            ticket2.classList.remove("card-highlight");
            ticket3.classList.remove("card-highlight");
            ticket4.classList.toggle("card-highlight");
        }
    }, false);
}

addKeyboardEventListeners()

const ticketsSelected = [];

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");

    if(ticketsSelected.includes(selector)) ticketsSelected.pop(selector);
    else ticketsSelected.push(selector);
}

showSelectedCards = () => {
    if(ticketsSelected.length > 0) alert("Ingressos Selecionados:" + ticketsSelected)
}