function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

let carro = 'Ferrari'
console.log(carro)

let preco = 19.99
console.log(formatar(preco))

let cidade = 'São Paulo'
console.log(cidade)

let x = 10
let y = 5
console.log(x > y) // True

let w = "10"
let z = 10
console.log(w === z) // False

let a = 10
let b = 5
console.log(a > b) // True

