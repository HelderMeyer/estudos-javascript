var area = window.document.getElementById('area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar(){
    area.innerText = 'Clicou!'
    area.style.backgroundColor = 'green'
}
function entrar(){
    area.style.backgroundColor = 'blue'
    area.innerText = 'Entrou!'
}
function sair(){
    area.style.backgroundColor = '#222222'
    area.innerText = 'Saiu!'
}