const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function executar(){
    let ano = Number(prompt(`Qual é o ano que você quer verificar?`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<h1 style="margin-top: 0px;">Analisando o ano de ${ano}...</h1>`
    if(( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0)){
        resultado.innerHTML += `<p>O ano de ${ano} <span style="background-color: green; font: bold 18pt Arial;">É BISSEXTO</span>\u{2705}</p>`
    }else{
        resultado.innerHTML += `<p>O ano de ${ano} <span style="background-color: red; font bold 18pt Arial;">NÃO É BISSEXTO</span>\u{274C}</p>`
    }
}