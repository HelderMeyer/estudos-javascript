function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

let carro = 'Ferrari'
console.log(carro)

let preco = 19.99
console.log(formatar(preco))

let cidade = 'São Paulo'
console.log(cidade)

