const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
function executar(){
    let produto = prompt(`Qual é o produto que você está comprando?`)
    let preco = Number(prompt(`Qual é o preço do produto "${produto}"`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<h1 style="margin-top: 0px;">Calculando desconto de 10% para o produto "${produto}"...</h1>`
    resultado.innerHTML += `<p>O preço original era de ${formatar(preco)}</p>`
    resultado.innerHTML += `<p>Você acaba de ganhar ${formatar(preco*0.10)} de desconto (-10%)</p>`
    resultado.innerHTML += `<p>No fim, você vai pagar ${formatar(preco - (preco*0.10))} no produto "${produto}."</p>`
}