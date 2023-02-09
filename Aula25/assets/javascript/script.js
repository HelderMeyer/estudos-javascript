const start = document.querySelector('input#botao')

start.addEventListener('click', contar)

function contar(){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#resultado')
    let inicioNumber = inicio.value
    let fimNumber = fim.value
    let passoNumber = passo.value
    for(let c = inicioNumber; c <= fimNumber; c += passoNumber){
        resultado.innerHTML = `${c}`
    }
}