function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function calcularImovel(metragem, quartos){
    let m2 = 3000
    let preco = 0
    if(quartos == 1){
        preco = metragem * m2
    }else if(quartos == 2){
        preco = metragem * (m2 * 1.2)
    }else if(quartos == 3){
        preco = metragem * (m2 * 1.5)
    }
    return preco
}

let metragem = 123
let quartos = 1
let preco = calcularImovel(metragem, quartos)
console.log(`O imóvel custa ${formatar(preco)}`)