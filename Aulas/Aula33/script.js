function fatorial(numero){
    let resposta = 1
    for(let contador = numero; contador > 1; contador--){
        resposta *= contador
    }
    return resposta
}

console.log(fatorial(5))

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040