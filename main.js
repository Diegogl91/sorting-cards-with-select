let cartas = document.getElementById('cartas');
let contenedorLog = document.getElementById('contenedorLog')
let grupodeCartas = [];
let cartasGeneradas = [];
function CrearCarta(elemPadre, cardData) {
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
    elemPadre.appendChild(carta);
    let pintaup = document.createElement('div');
    pintaup.className = "pintasuperior"
    pintaup.style.position = "relative";
    pintaup.style.top = "0px";
    pintaup.style.left = "5px";
    pintaup.style.fontSize = "30px";
    pintaup.innerHTML = cardData.pinta.forma;
    pintaup.style.color = cardData.pinta.color;
    carta.appendChild(pintaup)
    let valor = document.createElement('div')
    valor.className = "valorcarta";
    valor.style.textAlign = "center";
    valor.style.paddingTop = "5px";
    valor.style.fontSize = "30px";
    valor.innerHTML = cardData.valor.valor;
    carta.appendChild(valor);
    let pintadown = document.createElement('div')
    pintadown.className = "pintainferior";
    pintadown.style.position = "relative";
    pintadown.style.top = "15px";
    pintadown.style.left = "-5px";
    pintadown.style.fontSize = "30px";
    pintadown.style.transform = "rotate(180deg)";
    pintadown.innerHTML = cardData.pinta.forma;
    pintadown.style.color = cardData.pinta.color;
    carta.appendChild(pintadown);
}
function generarValores(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        let cartaGenerada = { valor: obtenerNumero(), pinta: obtenerPintayColor() }
        array.push(cartaGenerada);
    }
    return array;
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
function obtenerNumero() {
    let num = Math.floor(Math.random() * 12) + 1;
    let numeros = num;
    switch (num) {
        case 1:
            numeros = "A";
            break;
        case 10:
            numeros = "J"
            break;
        case 11:
            numeros = "Q";
            break;
        case 12:
            numeros = "K";
            break;
    }
    return { numero: num, valor: numeros };
}
function repartirCartas() {
    let numDeCartas = document.getElementById('nCartas').value;
    cartasGeneradas = generarValores(numDeCartas);
    contenedorLog.innerHTML = "";
    cartas.innerHTML = "";
    for (let i = 0; i < numDeCartas; i++) {
        grupodeCartas.push(CrearCarta(cartas, cartasGeneradas[i]))
    }
}
window.onload = function () {
    let draw = document.getElementById('btncartas');
    draw.addEventListener('click', function () {
        repartirCartas()
    })
    
    let seleccion = document.getElementById('btnSelector')
    seleccion.addEventListener('click', function () {
        selectSort(cartasGeneradas)
    })
}

const selectSort = (arr = []) => {
    let min = 0;
    let track = 0;
    while (min < arr.length) {
        for (let i = min + 1; i < arr.length; i++) {
            if (arr[min].valor.numero > arr[i].valor.numero) {
                let iteracion = document.createElement('div');
                let tracker = document.createElement('div');
                tracker.innerHTML = track;
                tracker.className = `iteracion`;
                iteracion.appendChild(tracker);
                let aux = arr[min];
                arr[min] = arr[i];
                arr[i] = aux;
                let nuevoContenedor = document.createElement("div");
                nuevoContenedor.className = `arregloDeCartas`
                for (let i = 0; i < arr.length; i++) {
                    CrearCarta(nuevoContenedor, cartasGeneradas[i])
                };
                iteracion.appendChild(nuevoContenedor);
                contenedorLog.appendChild(iteracion);
                track++
            }
        }
        min++
    }
    return arr;
};

