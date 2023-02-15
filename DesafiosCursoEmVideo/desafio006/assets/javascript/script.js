const button = document.querySelector('input#temperatura')
button.addEventListener('click', converter)
function medida(valor){
    return valor.toLocaleString('pt-BR')
}
function converter(){
    let temperatura = Number(prompt(`Digite uma temperatura em ºC (Celsius)`))
    let resposta = document.querySelector('div#resultado')
    resposta.innerHTML = `<h1 style="margin-top: 0px;">A temperatura de ${temperatura}ºC, corresponde a...</h1>`
    resposta.innerHTML += `<p>${medida(temperatura+273.15)}ºK (Kelvin)</p>` 
    resposta.innerHTML += `<p>${medida((temperatura * 9/5)+32)}ºF (Fahrenheit)</p>`
}