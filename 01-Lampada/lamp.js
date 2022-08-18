
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const quebrar = document.getElementById('quebrar');
const lampada = document.getElementById('lamp');



function ligOn(){
	lamp.src = './img/ligada.jpg';
}

function ligOff(){
	lamp.src = './img/apagada.jpg';
}

function quebrei(){
	lamp.src = './img/quebradaa.jpg';
}


ligar.addEventListener('click', ligOn);
desligar.addEventListener('click', ligOff);
quebrar.addEventListener('click', quebrei);