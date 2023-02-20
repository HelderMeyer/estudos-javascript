let personagem = {
    nome: 'Helder',
    sobrenome: 'Meyer',
    idade: 20,
    pets: [
        'Cachorro','Gato','Papagaio','Cacatua'
    ],
    legal(){
        return true
    }
}
function l(valor){
    if(valor){
        return 'Legal'
    }else{
        return 'Não é legal'
    }
}
const corpo = document.querySelector('body')
corpo.innerHTML += `<p><span style="font-weight: bold">Nome:</span> ${personagem.nome}</p>`
corpo.innerHTML += `<p><span style="font-weight: bold">Idade:</span> ${personagem.idade} anos</p>`
corpo.innerHTML += `<p><span style="font-weight: bold">Pets:</span> ${personagem.pets.join(', ')}</p>`
corpo.innerHTML += `<p><span style="font-weight: bold">Estilo:</span> ${l(personagem.legal())}</p>`