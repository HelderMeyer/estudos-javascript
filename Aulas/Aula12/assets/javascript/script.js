const botao = document.getElementById('botao')

botao.addEventListener('click', verificar)

function verificar(){
    let vel = document.getElementById('velocidade')
    let velocidade = Number(vel.value)
    let resultado = document.getElementById('resultado')
    if(velocidade > 60){
        resultado.innerHTML = `<p>Sua velocidade é de ${velocidade} km/h, portanto, será <strong class="vermelho">MULTADO</strong>!</p>`
    }else{
        resultado.innerHTML = `<p>Sua velocidade é de ${velocidade} km/h, portanto, está <strong class="verde">dentro dos limites</strong>!</p>`
    }
}