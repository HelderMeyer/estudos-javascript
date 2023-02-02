let selecao = document.getElementById('nacionalidade')
let resposta = document.getElementById('resposta')
let enviar = document.getElementById('botao')

enviar.addEventListener('click', dizerNacionalidade)

function dizerNacionalidade(){
    if(selecao.value == 'Brasil'){
        resposta.innerHTML = `Você é brasileiro!`
    }else if(selecao.value == 'None'){
        resposta.innerHTML = `Nenhuma opção escolhida!`
    }else if(selecao.value != 'Brasil' && selecao.value != 'None'){
        resposta.innerHTML = `Você é estrangeiro!`
    }
    console.log(selecao.value)
}