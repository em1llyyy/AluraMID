alert('Olá, mundo')
function ticaSom(iElementoAudio){
    document.querySelector(iElementoAudio).play()
}
document.querySelectorAll('.tecla');
listaDeTecla[0].onclick = tocaSom;
const listaDeTecla = document.querySelectorAll('.tecla');
listaDeTecla[0].onclick = tocaSomPom;
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador < listaDeTecla.length) {
    listaDeTecla[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log[contadaor];
}