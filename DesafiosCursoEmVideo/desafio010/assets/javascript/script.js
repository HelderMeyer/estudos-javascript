const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function executar(){
    let a = Number(prompt(`Qual é o valor de A?`))
    let b = Number(prompt(`Qual é o valor de B?`))
    let c = Number(prompt(`Qual é o valor de C?`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<h1 style="margin-top: 0px;">Resolvendo Bhaskara</h1>`
    resultado.innerHTML += `<p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p>`
    resultado.innerHTML += `<p>O cálculo realizado será Δ = ${b}² - 4 * ${a} * ${c}</p>`
    resultado.innerHTML += `<p>O valor calculado foi Δ = ${(b**2) - 4 * a * c}</p>`
}