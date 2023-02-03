window.alert('Olá!')

const nome_canal = 'Hytekers'

let nome = window.prompt('Qual é o seu nome?')
window.alert(`Seu nome é ${nome}`)

let idade = window.confirm('Você tem 18 anos?')
if(idade){
    window.alert('Voto obrigatório!')
}else{
    window.alert('Voto opcional!')
}


let numero1 = Number.parseInt(window.prompt('Digite o primeiro número:'))
let numero2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
let numero3 = String(window.prompt('Digite o terceiro número:'))

let soma = String(numero1) + numero2 + numero3
window.alert(`A soma de ${numero1} com ${numero2} é igual a ${soma}!`)



let nome = window.prompt('Digite o seu nome:')
let salario = Number(window.prompt('Digite o valor do seu salário:'))

document.write(`<h1>Seu nome é <strong>${nome}</strong>!</h1>`)
document.write(`<h1>Seu nome possui <strong>${nome.length}</strong> letras!</h1>`)
document.write(`<h1>Seu nome em maiúsculo é <strong>${nome.toUpperCase()}</strong>!</h1>`)
document.write(`<h1>Seu nome em minúsculo é <strong>${nome.toLowerCase()}</strong>!</h1>`)

document.write(`<h1>Seu salário é de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>`)



let nome = document.querySelector('input#nome')
let resultado = document.querySelector('div#resultado')
let corpo = document.querySelector('body')

let botao__enviar = document.querySelector('input#botao__enviar')
let botao__limpar = document.querySelector('input#botao__limpar')

botao__enviar.addEventListener('click', escreva)
botao__limpar.addEventListener('click', limpar)

function escreva(){
    corpo.style.backgroundColor = '#00ffaa'
    resultado.innerHTML = `<h1>O seu nome é ${nome.value}</h1>`
}

function limpar(){
    corpo.style.backgroundColor = '#009f6a'
    resultado.innerHTML = ` `
}



let quadrado = document.querySelector('div#quadrado')
let texto = document.querySelector('h4#texto__quadrado')

quadrado.addEventListener('mouseover', entrar)
quadrado.addEventListener('mouseout', sair)
quadrado.addEventListener('click', clicar)

function entrar(){
    quadrado.style.backgroundColor = '#23ba88'
    texto.innerHTML = 'Entrou!'
    quadrado.style.borderRadius = '100px'
}

function sair(){
    quadrado.style.backgroundColor = '#c1f5e4'
    texto.innerHTML = 'Saiu!'
    quadrado.style.borderRadius = '0px'
    quadrado.style.width = '200px'
    quadrado.style.height = '200px'
}

function clicar(){
    quadrado.style.backgroundColor = 'red'
    texto.innerHTML = 'Clicou!'
    quadrado.style.width = '400px'
    quadrado.style.height = '400px'
    quadrado.style.borderRadius = '0px'
}



let velocidad = document.querySelector('input#velocidade')
let botao_conferir = document.querySelector('input#botao__conferir__velocidade')
let resultado_velocidade = document.querySelector('div#resultado__velocidade')

botao_conferir.addEventListener('click', conferirVelocidade)

function conferirVelocidade(){
    let vel = velocidad.value
    resultado_velocidade.innerHTML = `Sua velocidade é de ${vel} km/h!`
    resultado_velocidade.innerHTML += '<br>O limite de velocidade é de 60 km/h!'
    if(vel > 60){
        resultado_velocidade.innerHTML += `<br>Você será <strong>MULTADO</strong> por excesso de velocidade!`
    }else{
        resultado_velocidade.innerHTML += `<br>Você está dentro dos limites de velocidade!`
    }
}



let botao_nacionalidade = document.querySelector('input#botao__conferir__nacionalidade')

botao_nacionalidade.addEventListener('click', conferirNacionalidade)

function conferirNacionalidade(){
    let nacionalidade = document.querySelector('input#nacionalidade')
    let resultado = document.querySelector('div#resultado__nacionalidade')
    if(nacionalidade.value.toUpperCase() != 'BRASIL'){
        resultado.innerHTML = 'Estrangeiro!'
    }else{
        resultado.innerHTML = 'Brasileiro!'
    }
}



let agora = new Date()
let diaSemana = agora.getDay()

alert(diaSemana)





