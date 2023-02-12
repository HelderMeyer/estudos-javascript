function analisar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nome = document.getElementById('nome')
    let anoNascimento = document.getElementById('ano__nascimento')
    let sexo = document.getElementsByTagName('sexo')
    let resultado = document.getElementById('resultado')

    if(anoNascimento.value.length == 0 || anoNascimento.value > ano || nome.value.length == 0){
        alert('Alguma informação está errada!')
    }
}

/*
if (ano_nascimento.length == 0 || ano_nascimento.value > ano || nome.length == 0){
        alert('alguma informação está errada')
    } 
*/

// nomes das variaveis e ids
// document.getElementById('resultado')
// parênteses
// nome.value.length