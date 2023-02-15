const button = document.querySelector('input#distancia')
button.addEventListener('click', converter)
function pontuacao(valor){
    return valor.toLocaleString('pt-BR')
}
function converter(){
    let distancia = parseFloat(prompt(`Digite uma distância em metros (m)`))
    let div = document.querySelector('div')
    div.innerHTML = `<h1 style="margin-top: 0px;">A distância de ${pontuacao(distancia)} metros, corresponde a...</h1>`
    div.innerHTML += `<p>${pontuacao(distancia/1000)} quilômetros (Km)</p>`
    div.innerHTML += `<p>${pontuacao(distancia/100)} hectômetros (Hm)</p>`
    div.innerHTML += `<p>${pontuacao(distancia/10)} decâmetros (Dam)</p>`
    div.innerHTML += `<p>${pontuacao(distancia/0.1)} decímetros (dm)</p>`
    div.innerHTML += `<p>${pontuacao(distancia/0.01)} centímetros (cm)</p>`
    div.innerHTML += `<p>${pontuacao(distancia/0.001)} milímetros (mm)</p>`
}