'use strict'

export function calcularTabuada(quantidade, i){
    return{
        soma : quantidade + i,
        subtracao : quantidade - i,
        multiplicacao : quantidade * i,
        divisao : quantidade / i
    }
}