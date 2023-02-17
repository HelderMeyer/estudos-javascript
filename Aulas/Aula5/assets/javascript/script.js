var nome = window.prompt('Qual é o seu nome?')
document.writeln(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras! <br>`)
document.writeln(`Seu nome em maiúsculo é ${nome.toUpperCase()}<br>`)
document.writeln(`Seu nome em minúsculo é ${nome.toLowerCase()}`)

// .toFixed(valor) para adicionar quantas casas decimais eu quiser
// .replace('.',',') para trocar o ponto pela vírgula
// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) para alterar o . para , e colocar o R$ na frente.
// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})