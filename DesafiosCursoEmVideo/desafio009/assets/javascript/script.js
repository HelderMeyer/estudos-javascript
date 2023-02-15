const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function formatar(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
function executar(){
    let nome = prompt(`Qual é o nome do funcionário?`)
    let salario = Number(prompt(`Qual é o salário de ${nome}`))
    let reajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<h1 style="margin-top: 0px;">${nome} recebeu um aumento salarial!</h1>`
    resultado.innerHTML += `<p>O salário atual era ${formatar(salario)}.</p>`
    resultado.innerHTML += `<p>Com um aumento de ${reajuste}%, o salário vai aumentar ${formatar(salario*(reajuste/100))} no próximo mês.</p>`
    resultado.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${formatar((salario) + (salario*(reajuste/100)))}.</p>`
}