const button = document.querySelector('input#button')
button.addEventListener('click', executar)
function executar(){
    let login = document.querySelector('input#login')
    let senha = document.querySelector('input#password')
    function validar(){
        if(login.value !== 'Hytekers' && senha.value !== '123Hytekers'){
            alert(`Aviso: Login e Senha incorretos!`)
        }else if(login.value !== 'Hytekers'){
            alert(`Aviso: Login incorreto!`)
        }else if(senha.value !== '123Hytekers'){
            alert(`Aviso: Senha incorreta!`)
        }else{
            alert(`Aviso: LOGADO COM SUCESSO!`)
        }
    }
    validar()
}