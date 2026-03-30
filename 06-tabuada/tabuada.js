'use strict'

import{
    calcularTabuada
}from "./calculo.js"

const gerarTabuada = document.getElementById('gerarTabuada') //colocar em '' aspas simples (BOTÃO)

function obterTabuada(){
    const quantidade = Number(document.getElementById('quantidade').value) //essa variável é o ID que recebe o valor digitado pelo usuário.
    const tabela = document.getElementById('tabela') //'puxando' a tebela.


    tabela.replaceChildren() //apaga tudo o que tem dentro da tabela, deixando ela limpa para receber novos valores 

    for(let i = 1; i <= 10; i++){

        const resultado = calcularTabuada(quantidade, i)

        const tr = document.createElement('tr')

        const tdNumeros = document.createElement('td')
        tdNumeros.textContent = i

        const tdAdicao = document.createElement('td')
        tdAdicao.textContent = resultado.soma

        const tdSubtrair = document.createElement('td')
        tdSubtrair.textContent = resultado.subtracao
    
        if(resultado.subtracao < 0){
        tdSubtrair.classList.add('negativo')
        }
        const tdMultiplicar = document.createElement('td')
        tdMultiplicar.textContent = resultado.multiplicacao

        const tdDividir = document.createElement('td')
        tdDividir.textContent = resultado.divisao.toFixed(2)

        tr.replaceChildren(tdNumeros, tdAdicao, tdSubtrair, tdMultiplicar, tdDividir)
        tabela.appendChild(tr)

//Comando	O que acontece na prática
// tr.replaceChildren(...)	Pega a linha e "preenche" com as células de números e operações.
// tabela.appendChild(tr)	Pega essa linha montada e a "pendura" dentro da sua tabela na tela.
    }
}

gerarTabuada.addEventListener('click',obterTabuada) //Config do botão para a função ser executada


// function pegarNumero(numero){
//     const numero = Number(document.getElementById('numero').values)

// }

