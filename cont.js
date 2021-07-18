'use strict';

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const qtdSegundos = tempo % 60;
    segundos.textContent = qtdSegundos < 10 ? '0' + qtdSegundos : qtdSegundos;

    const minutos = document.getElementById('minutos');
    const qtdMinutos = Math.floor(tempo /60) % 60;
    minutos.textContent = qtdMinutos < 10 ? '0' + qtdMinutos : qtdMinutos;

    const horas = document.getElementById('horas');
    const qtdHoras = Math.floor(tempo / 60 / 60) % 24;
    horas.textContent = qtdHoras < 10 ? '0' + qtdHoras : qtdHoras;

    const dias = document.getElementById('dias');
    const qtdDias = Math.floor(tempo / 60 / 60 / 24);
    dias.textContent = qtdDias < 10 ? '0' + qtdDias : qtdDias;
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
        if(tempo === 0) {
            pararContagem();
        }
        atualizar(tempo)
        tempo--;
    }
    const id = setInterval(contar, 1000);
    
}

const tempoRestante = () => {
    const dataEvento = new Date('2021-11-26 20:00:00');
    const dataHoje = Date.now();
    return Math.floor((dataEvento - dataHoje) / 1000);
}

contagemRegressiva(tempoRestante());