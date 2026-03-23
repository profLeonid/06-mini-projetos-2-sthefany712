'use strict'
import {criarListaImpares, 
    criarListaMulti5, 
    criarListaNumeros, 
    criarListaPares, 
    criarListaPotencia2
} from "./listasNumericas.js";

const gerarNumeros = document.getElementById('gerarNumeros')

function criarLinha (numero, par, impar, multi5, potencia2) {
    const tabela = document.getElementById('tabela')
    
    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td') //onde fica as informações
    tdNumeros.textContent = numero

    const tdPares = document.createElement('td')
    tdPares.textContent = par

    const tdImpares = document.createElement('td')
    tdImpares.textContent = impar

    const tdMulti5 = document.createElement('td')
    tdMulti5.textContent = multi5

    const tdPotencia2 = document.createElement('td')
    tdPotencia2.textContent = potencia2

    tr.replaceChildren(tdNumeros, tdPares, tdImpares, tdMulti5, tdPotencia2)

    tabela.appendChild(tr)
}

function preencherTabela(){
    const quantidade = Number(document.getElementById('quantidade').value)
    
    
    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMulti5 = criarListaMulti5(quantidade)
    const listaPostencia2 = criarListaPotencia2(quantidade)

    document.getElementById('tabela').replaceChildren()
    
    for (let i=0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaPares[i], listaImpares[1], listaMulti5[1], listaPostencia2[i])
        
    }



                        //Depois que fiz isso, passei para uma função (criarLinha), para ficar mais organizado, então eu apagaria essa parte mas deixei para entender melhor o código.
                                                //Depois chamei a função (criarLinha) dentro da (preencherTabela).

    // const tr = document.createElement('tr') //linha - aqui estou trabalhando apenas c/ 1 por enquanto
    // //appendChild - add TAG dentro de TAG
   
    // const tdNumeros = document.createElement('td') //onde fica as informações
    // tdNumeros.textContent = '10'

    // const tdPares = document.createElement('td')
    // tdPares.textContent = '12'

    // const tdImpares = document.createElement('td')
    // tdImpares.textContent = '13'

    // const tdMulti5 = document.createElement('td')
    // tdMulti5.textContent = '50'

    // const tdPotencia2 = document.createElement('td')
    // tdPotencia2.textContent = '512'

    // tr.replaceChildren(tdNumeros, tdPares, tdImpares, tdMulti5, tdPotencia2) //cria de uma vez, mas precisa tomar cuidado, estamos usando ele por estar vazio
    // //replaceChild - ele substitui

    // tabela.appendChild(tr)

    // console.log(listaMulti5)

    // console.log(preencherTabela)

}

 gerarNumeros.addEventListener('click', preencherTabela)


// import * as listas from "./listasNumericas.js" //IMPORTA TODAS AS FUNÇÕES (mas pode deixar o sistema mais lento, porém, se for usar tudo por exemplo)
// const teste = listas.criarListaPares(5) //.lista (para chamar biblioteca)

