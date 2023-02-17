let selecao = document.getElementById('nacionalidade')
let resposta = document.getElementById('resposta')
let enviar = document.getElementById('botao')

enviar.addEventListener('click', dizerNacionalidade)

function dizerNacionalidade(){
    if(selecao.value != 'None'){
        if(selecao.value == 'Brasil'){
            resposta.innerHTML = `Você é brasileiro!`
        }else{
            resposta.innerHTML = `Você é estrangeiro!`
        }
    }else{
        resposta.innerHTML = `Nenhuma opção escolhida!`
    }
    console.log(selecao.value)
}