function formatar(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
function calcularImovel(metragem, quartos) {
    let m2 = 3000
    let preco = 0
    switch (quartos) {
        case 1:
            preco = m2 * metragem;
            break;
        case 2:
            preco = m2 * 1.2 * metragem;
            break;
        case 3:
            preco = m2 * 1.5 * metragem;
            break;
    }
    return preco
}
let metragem = 123
let quartos = 1
let preco = calcularImovel(metragem, quartos)
alert(`A casa custa ${formatar(preco)}!`)
