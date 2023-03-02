function validate(user, password){
    if(user === 'Helder' && password === 'hytekers123'){
        return true
    }else{
        return false
    }
}

let user = 'Helder'
let password = 'hytekers123'
let validation = validate(user, password)

if(validation){
    console.log(`Acesso concedido!`)
}else{
    console.log(`Acesso negado!`)
}


