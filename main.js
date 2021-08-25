let cartas = document.getElementById('cartas');


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pintas = ['corazon', 'diamante', 'picas', 'trebol'];
let grupodeCartas = [];


// let carta = document.getElementById('carta');
function CrearCarta() {
    let numeroDeCartas = document.getElementsByClassName('carta').length;
    let carta = document.createElement('div');
    carta.id = `carta-${numeroDeCartas}`;
    carta.className = "carta";
    carta.style.background = "#FFFFFF";
    carta.style.width = "80px";
    carta.style.height = "120px";
    carta.style.borderRadius = "5px";
    carta.style.margin = "20px";
    carta.style.display = "inline-block";
    cartas.appendChild(carta);
    let pintaup = document.createElement('div');
    pintaup.className = "pintasuperior"
    pintaup.style.position = "relative";
    pintaup.style.top = "0px";
    pintaup.style.left = "5px";
    pintaup.style.fontSize = "30px";
    let pintaSeleccionada = obtenerPintayColor();
    pintaup.innerHTML = pintaSeleccionada.forma;
    pintaup.style.color = pintaSeleccionada.color;
    carta.appendChild(pintaup)
    let valor = document.createElement('div')
    valor.className = "valorcarta";
    valor.style.textAlign = "center";
    valor.style.paddingTop = "5px";
    valor.style.fontSize = "30px";
    valor.innerHTML = obtenerNumero();
    carta.appendChild(valor);
    let pintadown = document.createElement('div')
    pintadown.className = "pintainferior";
    pintadown.style.position = "relative";
    pintadown.style.top = "15px";
    pintadown.style.left = "-5px";
    pintadown.style.fontSize = "30px";
    pintadown.style.transform = "rotate(180deg)";
    pintadown.innerHTML = pintaSeleccionada.forma;
    pintadown.style.color = pintaSeleccionada.color;
    carta.appendChild(pintadown)

}

function obtenerPintayColor() {
    let varpinta = Math.floor(Math.random() * 4) + 1;
    let pinta = "";
    switch (varpinta) {
        case 1:
            pinta = { forma: "♠", color: "black" };
            break;
        case 2:
            pinta = { forma: "♥", color: "red" };
            break;
        case 3:
            pinta = { forma: "♦", color: "red" };
            break;
        case 4:
            pinta = { forma: "♣", color: "black" };
            break;
    }
    return pinta;
}

function obtenerNumero(){
    let num = Math.floor(Math.random() * 12)+1;
    switch (num) {
        case 1:
            num = "A";
            break;
        case 10:
            num = "J"
            break;
        case 11:
            num = "Q";
            break;
        case 12:
            num = "K";
            break;
    }
    return num;
}

function repartirCartas(){
    let numDeCartas = document.getElementById('nCartas').value;
    let cartas = document.getElementById(`cartas`)
    cartas.innerHTML = "";
    for (let i=0;i<numDeCartas;i++){
        CrearCarta()
    }
}

window.onload = function(){
    let draw = document.getElementById('btncartas');
    draw.addEventListener('click', function(){
        repartirCartas()
    })
}



