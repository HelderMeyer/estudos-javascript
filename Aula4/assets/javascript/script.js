var numero1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
var numero2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
var soma = numero1 + numero2
//window.alert('A soma dos 2 números é ' + soma)
window.alert(`A soma entre ${numero1} e ${numero2} é igual a ${soma}!`)

// + : para adição
// + : para concatenação

// Colocar o Number.parseInt(window.prompt(n)) para converter a string para Int
// Colocar o Number.parseFloat(window.prompt(n)) para converter a string para Float
// Colocar o Number(window.prompt(n)) para converter a string para Int/Float
// String(n) para converter para String
// n.toString() para convertar também para String
// String(soma)
// soma.toString()


//Template String
var s = `Javascript`
window.alert(`Estou estudando ${s}`)

// s.lenght para mostrar a quantidade de caracteres na string
// s.toUpperCase() para deixar todas as letras maiúsculas
// s.toLowerCase() para deixar todas as letras minúsculas