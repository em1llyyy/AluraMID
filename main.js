alert('Olá, mundo')
function tocaSom(iElementoAudio){
const elementom = document.querySelector(iElementoAudio).play()
if (elemento === null && elemento.localName === 'audio') {
    console.log(elemento);
if (elemento.localName === 'audio') {
//   elemento.play();
}
    alert('Elemento não encontrado');
}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
}
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_ &{instrumento}';

tecla.onclick = function () {
    tocaSom(idAudio);
}

tecla.onkeydown = function (evento) {
    console.log(evento);
    if (evento.code === 'Enter' || evento.code === 'Space') {
        tecla.classList.add('ativa');
    }
}

tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
}