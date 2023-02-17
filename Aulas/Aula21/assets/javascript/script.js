const botao = document.querySelector('input#botao__verificar')
const imagem = document.createElement('img')

botao.addEventListener('click', verificar)

function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let ano_nascimento = document.querySelector('input#ano__nascimento')
    let ano_digitado = ano_nascimento.value
    let resultado = document.querySelector('div#resultado')
    if(ano_digitado <= 0 || ano_digitado > ano){
        alert('Por favor, digite um ano válido!')
    }else{
        let sex = document.getElementsByName('sexo')
        let idade = ano - Number(ano_digitado)
        let genero = ''
        let p0 = document.querySelector('p#p0')
        let p1 = document.querySelector('p#p1')
        let p2 = document.querySelector('p#p2')
        imagem.setAttribute('id', 'imagem')
        if (sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                imagem.setAttribute('src', 'assets/img/Homem-Crianca.png')
            }else if(idade >=10 && idade <21){
                //Jovem
                imagem.setAttribute('src', 'assets/img/Homem-Jovem.png')
            }else if(idade >=21 && idade<60){
                //Adulto
                imagem.setAttribute('src', 'assets/img/Homem-Adulto.png')
            }else{
                //Idoso
                imagem.setAttribute('src', 'assets/img/Homem-Idoso.png')
            }
        }else if (sex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                imagem.setAttribute('src', 'assets/img/Mulher-Crianca.png')
            }else if(idade >=10 && idade <21){
                //Jovem
                imagem.setAttribute('src', 'assets/img/Mulher-Jovem.png')
            }else if(idade >=21 && idade<60){
                //Adulto
                imagem.setAttribute('src', 'assets/img/Mulher-Adulta.png')
            }else{
                //Idoso
                imagem.setAttribute('src', 'assets/img/Mulher-Idosa.png')
            }
        }
        resultado.style.flexDirection = 'column'
        resultado.style.alignItems = 'center'
        p0.textContent = ``
        p0.style.margin = '0'
        p1.style.margin = '5px'
        p2.style.margin = '5px'
        p1.innerHTML = `Idade calculada: <strong>${idade}</strong>`
        p2.innerHTML = `Sexo: <strong>${genero}</strong>`
        imagem.style.marginTop = '10px'
        resultado.appendChild(imagem)
    }
}