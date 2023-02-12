const botao = document.querySelector('input#botao__adicionar')
botao.addEventListener('click', adicionarNumero)

function adicionarNumero() {
    let numero = document.querySelector('input#valor')
    let n = Number(numero.value)
    let elementos = []

    if (n < 1 || n > 100) {
        alert('ATENÇÃO: Digite um número entre 1 e 100.')
    } else if (elementos.indexOf(n) != -1) {
        alert('O valor já foi utilizado!')
    } else {
        let select = document.querySelector('select#lista')
        elementos.push(n)
        for (let contador = 0; contador < elementos.length; contador++) {
            elementos[contador] = n
            let option = document.createElement('option')
            option.value = elementos[n]
            option.innerHTML = `Valor ${elementos[contador]} adicionado.`
            select.appendChild(option)
        }
    }
    const botao2 = document.querySelector('input#botao__finalizar')
    botao2.addEventListener('click', finalizar)

    function finalizar() {
        console.log(elementos.length)
    }
}