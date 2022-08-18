
const parado = document.getElementById('svm');
const atencao = document.getElementById('sam');
const livre = document.getElementById('svd');
const apagado = document.getElementById('sap');



function inativo(){
	sema.src = './img/semAp.png';
}


function pare(){
	sema.src = './img/semVm.png';
}

function atento(){
	sema.src = './img/semAm.png';
}

function siga(){
	sema.src = './img/semVd.png';
}


apagado.addEventListener('click', inativo);
parado.addEventListener('click', pare);
atencao.addEventListener('click', atento);
livre.addEventListener('click', siga);