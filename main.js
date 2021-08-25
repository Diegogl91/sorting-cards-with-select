let cartas = document.getElementById('cartas');

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
   let valorSeleccionado = obtenerNumero();
   valor.innerHTML = valorSeleccionado.valor;
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
    return {valor:valorSeleccionado, pinta:pintaSeleccionada};

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
    return {numero: num, valor:numeros};
}

function repartirCartas(){
    let numDeCartas = document.getElementById('nCartas').value;
    let cartas = document.getElementById(`cartas`)
    cartas.innerHTML = "";
    for (let i=0;i<numDeCartas;i++){
        grupodeCartas.push(CrearCarta())
    }
    console.log(grupodeCartas)
    console.log(bubbleSort(grupodeCartas))
}

window.onload = function(){
    let draw = document.getElementById('btncartas');
    draw.addEventListener('click', function(){
        repartirCartas()
    })
}


const bubbleSort = (arr = []) => {
    let wall = arr.length - 1;
    while( wall >= 0){
        let index = 0;
        while(index < wall){
            if(arr[index].valor.numero > arr[index + 1].valor.numero){
                let aux = arr[index + 1];
                arr[index + 1] = arr[index];
                arr[index] = aux;
                
            }
            index++;
        }
        wall--;
    }
    return arr;
}




