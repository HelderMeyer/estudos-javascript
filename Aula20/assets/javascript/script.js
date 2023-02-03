function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12){
        img.src = 'assets/img/Manha.png'
        document.body.style.backgroundColor = '#f0e96e'
    } else if (hora >= 12 && hora < 18){
        img.src = 'assets/img/Tarde.png'
        document.body.style.backgroundColor = '#774138'
    } else {
        img.src = 'assets/img/Noite.png'
        document.body.style.backgroundColor = '#094889'
    }
}

