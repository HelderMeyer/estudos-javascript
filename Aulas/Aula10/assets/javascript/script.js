function somar(){
    var numero1 = document.getElementById('txtn1')
    var numero2 = document.querySelector('input#txtn2')
    var res = document.getElementById('resultado')
    var n1 = Number.parseInt(numero1.value)
    var n2 = Number.parseInt(numero2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} com ${n2} é igual a ${s}!`
}