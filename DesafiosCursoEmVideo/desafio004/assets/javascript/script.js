const button = document.querySelector('input#comprar')
button.addEventListener('click', comprar)
function m(num){
    return num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
function comprar(){
    const produto = window.prompt(`Que produto você está comprando?`)
    const preco = Number(window.prompt(`Qual é o preço do item ${produto} que você está comprando?`))
    const dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar o produto ${produto}?`))
    alert(`Você comprou o produto ${produto} que custou ${m(preco)}. \n 
    Deu ${m(dinheiro)} em dinheiro e vai receber ${m(dinheiro - preco)} de troco. \n 
    Volte sempre!`)
}
