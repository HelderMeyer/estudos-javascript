const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function executar(){
    let nome = prompt(`Qual é o nome do aluno?`)
    let nota1 = Number(prompt(`Primeira nota de ${nome}`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}`))
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<h1 style="margin-top: 0px;">Analisando a situação de ${nome}</h1>`
    let media = (nota1+nota2)/2
    resultado.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong></p>`
    if(media < 3){
        resultado.innerHTML += `Com média abaixo de 3,0, o aluno está <span style="background-color: red; font: bold 18pt Arial;">REPROVADO</span>`
    }else if(media >= 3 && media < 6){
        resultado.innerHTML += `Com média entre 3,0 e 6,0, o aluno está em <span style="background-color: orange; font: bold 18pt Arial;">RECUPERAÇÃO</span>`
    }else{
        resultado.innerHTML += `Com média acima de 6,0, o aluno está <span style="background-color: green; font: bold 18pt Arial;">APROVADO</span>`
    }
}