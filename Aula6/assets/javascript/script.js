window.alert('Olá!')
let nome = window.prompt('Qual é o seu nome?')
window.alert('Seu nome é ' + nome)
let termos = window.confirm('Você aceita nossos termos?')
if(termos == true){
    window.alert('Obrigado por aceitar nosso termos!')
}else{
    window.alert('Que pena...')
}

var sobrenome = window.prompt(`Qual é o seu sobrenome?`) 
window.alert(`Seu sobrenome é ${sobrenome}`)

var num1 = Number(window.prompt(`Digite o primeiro número:`))
var num2 = Number.parseInt(window.prompt(`Digite o segundo número:`))
var soma = num1 + num2
window.alert(`A soma de ${num1} com o ${num2} é de ${soma}!`)

var upper = window.prompt('Deixe seu nome em maiúsculo')
window.alert(`Seu nome ${upper.toUpperCase()}`)

var lower = window.prompt('Deixe seu nome em minúsculo')
window.alert(`Seu nome ${lower.toLowerCase()}`)

var salario = Number(window.prompt('Digite o valor do seu salário'))
window.alert(`Seu salário é de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

var salario_anual = Number(window.prompt('Digite quanto você ganha no ano'))
window.alert(`Você ganha ${salario_anual.toFixed(2).replace('.',',')}`)

var nome_tela = window.prompt('Nome para aparecer na tela')
document.writeln(`Seu nome é ${nome_tela}`)

var n1 = Number.parseFloat(window.prompt('Digite um número'))
var n2 = Number(window.prompt('Digite outro número'))
var n3 = window.prompt(`Digite mais um número`)
var s = n1 + n2 + n3.toString()

window.alert(String(s))
