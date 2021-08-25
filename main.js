let cartas =document.getElementById('cartas');


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pintas = ['corazon', 'diamante', 'picas', 'trebol'];
let grupodeCartas = [];


// let carta = document.getElementById('carta');
let carta = document.createElement('div');
carta.id = "carta";
carta.style.background = "#FFFFFF";
carta.style.width = "80px";
carta.style.height = "120px";
carta.style.borderRadius = "5px";
carta.style.margin = "20px";
cartas.appendChild(carta);
let pintaup =document.createElement('div')
pintaup.id = "pintasuperior"
pintaup.style.position = "relative";
pintaup.style.top = "0px"
pintaup.style.left = "5px"
pintaup.style.fontSize = "30px"
pintaup.innerHTML = "♥"
carta.appendChild(pintaup)
let valor =document.createElement('div')
valor.id ="valorcarta"
valor.style.textAlign = "center";
valor.style.paddingTop = "5px";
valor.style.fontSize = "30px";
valor.innerHTML = "7"
carta.appendChild(valor);
let pintadown =document.createElement('div')
pintadown.id = "pintainferior"
pintadown.style.position = "relative"
pintadown.style.top = "15px";
pintadown.style.left = "-5px";
pintadown.style.fontSize = "30px"
pintadown.style.transform = "rotate(180deg)"
pintadown.innerHTML = "♥"
carta.appendChild(pintadown)




