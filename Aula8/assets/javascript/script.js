/* 
Árvore hierárquica DOM

Tudo começa pelo window (objeto).

Dentro do window, temos outros 3 objetos 
(location, document, history)

Dentro do document, temos o html

Dentro do html, temos o head e o body

(Quem tá em cima é parent (pai/mãe), 
quem tá em baixo é child (filho))

Dentro do head, temos o meta e title

Dentro do body, temos o h1, p, div...

Dentro do p, temos o strong
*/

// window.document.writeln(window.document.URL)

/*
5 maneiras de selecionar os elementos:

1. Marca
getElementsByTagName()
2. ID
3. Nome
4. Classe
5. Seletor
*/

var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1]

/*
var mensagem = window.document.getElementById('msg')
mensagem.style.background = 'green'
mensagem.innerText = 'Estou aguardando...'
window.document.getElementById('msg').innerText = 'Olá'
*/

var d = document.getElementById('msg')
d.innerHTML = '<strong>Olá</strong>'

var e = document.querySelectorAll('div#msg')[0]
e.style.color = 'blue'

// document.getElementsByClassName('')[]

/*
o innerText pega somente o texto, sem as formatações
o innerHTML pega o texto e as formatações
*/