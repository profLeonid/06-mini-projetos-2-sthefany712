'use strict'

export function criarListaNumeros(quantidade){
    let listaNumeros = []
    for (let i=1; i<=quantidade; i++){
        listaNumeros.push(i)       
    }
    return listaNumeros

}

export function criarListaPares(quantidade){
    let listaPares = []
    let par = 2
    for (let i=1; i<=quantidade; i ++){
        listaPares.push(par)
        par +=2
    }
    return listaPares
}

export function criarListaImpares(quantidade){
    let listaImpares = []
    let impar = 1 
    for (let i=1; i<=quantidade; i ++){
        listaImpares.push(impar)
        impar +=2
    }
    return listaImpares
}

export function criarListaMulti5 (quantidade){
    let criarListaMulti5 = []
    let multi5 = 5
    for (let i=5; i<=quantidade; i++){
        criarListaMulti5.push(multi5)
        multi5 +=5
    }
    return criarListaMulti5
}

export function criarListaPotencia2 (quantidade){
    let listaPostencia2 = []
    for (let i=0; i<quantidade; i++){
        listaPostencia2.push(2 ** i)
    }
    return listaPostencia2
}