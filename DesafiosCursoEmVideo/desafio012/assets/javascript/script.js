const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
function executar(){
    let precoAntes = Number(prompt(`Qual era o preço anterior do produto?`))
    let precoDepois = Number(prompt(`Qual é o preço atual do produto?`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<h1 style="margin-top: 0px;">Analisando os valores informados</h1>`
    if(precoDepois > precoAntes){
        resultado.innerHTML += `<p>O produto custava ${formatar(precoAntes)} e agora custa ${formatar(precoDepois)}.</p>`
        resultado.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        resultado.innerHTML += `<p>O preço subiu ${formatar(precoDepois-precoAntes)} em relação ao preço anterior.</p>`
        resultado.innerHTML += `<p>Uma variação de ${(((precoDepois/precoAntes)-1)*100).toFixed(2).replace('.',',')}% para cima.</p>`
    }else{
        resultado.innerHTML += `<p>O produto custava ${formatar(precoAntes)} e agora custa ${formatar(precoDepois)}.</p>`
        resultado.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        resultado.innerHTML += `<p>O preço caiu ${formatar(precoAntes-precoDepois)} em relação ao preço anterior.</p>`
        resultado.innerHTML += `<p>Uma variação de ${(((precoAntes/precoDepois)-1)*100).toFixed(2).replace('.',',')}% para baixo.</p>`
    }
}