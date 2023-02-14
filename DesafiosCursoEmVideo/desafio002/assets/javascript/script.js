const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function executar(){
    const nome = window.prompt('Qual é o seu nome?')
    const idade = window.prompt(`Olá, ${nome}! Qual é a sua idade?`)
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}