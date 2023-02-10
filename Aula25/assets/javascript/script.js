const start = document.querySelector('input#botao')

start.addEventListener('click', contar)

function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#resultado')
    let inicioNumber = inicio.value
    let fimNumber = fim.value
    let passoNumber = passo.value
    if (inicioNumber.length == 0 || fimNumber.length == 0 || passoNumber.length == 0) {
        alert('Atenção: Faltam dados!')
        resultado.innerHTML = `Impossível contar!`
    } else {
        resultado.innerHTML = `Contando: `
        let i = Number(inicioNumber)
        let j = Number(fimNumber)
        let k = Number(passoNumber)
        if(k <= 0){
            alert('Passo inválido! Será considerado o valor 1 (Passo).')
            k = 1
        }
        //Contagem Crescente
        if(i < j){
            for(let c = i; c <= j; c += k){
                resultado.innerHTML += `\u{1F449} ${c} `
            }
        //Contagem Decrescente
        }else{
            for(let c = i; c >= j; c -= k){
                resultado.innerHTML += `\u{1F449} ${c} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}