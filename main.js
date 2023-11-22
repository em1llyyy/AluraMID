// Pom -------------------------------------------
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

/*
     Clap
*/
function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

/*
     Tim
*/
function tocaSomTim (){
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

/*
     Puff
*/
function tocaSomPuff (){
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;

/*
     Splash
*/
function tocaSomSplash (){
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

/*
    Toim
*/
function tocaSomToim (){
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;

/*
     Psh
*/
function tocaSomPsh (){
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;

/*
     Tic
*/
function tocaSomTic (){
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;

/*
     Tom
*/
function tocaSomTom (){
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

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