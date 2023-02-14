let b1 = document.querySelector('input#button1')
let b2 = document.querySelector('input#button2')
let b3 = document.querySelector('input#button3')

b1.addEventListener('click', function(){apertar(1)})
b2.addEventListener('click', function(){apertar(2)})
b3.addEventListener('click', function(){apertar(3)})

function apertar(numero){
    alert(`Botão ${numero}`)
}