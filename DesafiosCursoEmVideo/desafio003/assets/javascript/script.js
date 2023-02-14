const button = document.querySelector('input#button')
button.addEventListener('click', executar)

function executar(){
    const numero1 = Number(window.prompt(`Digite um número inteiro qualquer`))
    alert(`Antes de ${numero1}, temos o número ${numero1-1} \n Depois do ${numero1}, temos o número ${numero1 + 1}`)
}