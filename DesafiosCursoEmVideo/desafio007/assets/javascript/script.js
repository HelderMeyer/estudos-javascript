const cotacao = Number(window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`))

const button = document.querySelector('input#dinheiro')
button.addEventListener('click', executar)
function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: "USD"})
}
function executar(){
    let saldo = Number(prompt(`Quantos R$ você tem na carteira`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `Você tem ${formatar(saldo/cotacao)}`
}