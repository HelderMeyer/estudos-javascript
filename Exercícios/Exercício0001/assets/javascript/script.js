let carro = 'Ferrari'
alert(carro)

function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

let preco = 19.99
alert(formatar(preco))

let cidade = 'São Paulo'
alert(cidade)