const botao = document.querySelector('input#botao__adicionar')
botao.addEventListener('click', adicionarNumero)
let elementos = []

function adicionarNumero() {
    let numero = document.querySelector('input#valor')
    let n = Number(numero.value)

    if (n < 1 || n > 100) {
        alert('ATENÇÃO: Digite um número entre 1 e 100.')
    } else if (elementos.indexOf(n) != -1) {
        alert('O valor já foi utilizado!')
    } else {
        let select = document.querySelector('select#lista')
        elementos.push(n)
        let option = document.createElement('option')
        for (let c = 0; c < elementos.length; c++) {
            option.value = elementos[c]
            option.innerHTML = `Valor ${elementos[c]} adicionado.`
        }
        select.appendChild(option)
    }
}

const botao2 = document.querySelector('input#botao__finalizar')
botao2.addEventListener('click', finalizar)

function finalizar() {
    elementos.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    let resultado = document.querySelector('div#resultado2')
    resultado.innerHTML = `<p>Ao todo, temos ${elementos.length} números cadastrados!</p>`
    resultado.innerHTML += `<p>O maior valor informado foi o ${elementos[elementos.length-1]}</p>`
    resultado.innerHTML += `<p>O menor valor informado foi o ${elementos[0]}</p>`
    let soma = 0
    for(let contador = 0; contador < elementos.length; contador++){
        soma += elementos[contador]
    }
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${soma/elementos.length}</p>`
}