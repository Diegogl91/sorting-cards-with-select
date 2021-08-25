let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pintas = ['corazon', 'diamante', 'picas', 'trebol'];

let carta = document.getElementById('carta');
carta.style.background = "#FFFFFF";
carta.style.width = "80px";
carta.style.height = "120px";
carta.style.borderRadius = "5px";
carta.style.margin = "20px"
let valor = document.getElementById('valorcarta');
valor.style.textAlign = "center";
valor.style.paddingTop = "5px";
valor.style.fontSize = "30px";
let pintaup = document.getElementById('pintasuperior')
pintaup.style.position = "relative";
pintaup.style.top = "0px"
pintaup.style.left = "5px"
pintaup.style.fontSize = "30px"
let pintadown = document.getElementById('pintainferior');
pintadown.style.position = "relative"
pintadown.style.top = "15px";
pintadown.style.left = "-5px";
pintadown.style.fontSize = "30px"
pintadown.style.transform = "rotate(180deg)"


