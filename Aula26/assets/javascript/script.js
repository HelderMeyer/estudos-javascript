const botao = document.querySelector('input#botao')
botao.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    let numero = document.querySelector('input#valor')
    let select = document.getElementById('tabuada')
    if(numero.value.length == 0){
        alert('Valor inválido!')
    }else{
        let n = Number(numero.value)
        select.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let option = document.createElement('option')
            option.value = c
            option.innerHTML = `${n} x ${c} = ${n*c}`
            select.appendChild(option)
        }
    }
}