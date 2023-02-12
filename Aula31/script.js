function soma(numero1=0, numero2=0){
    return numero1 + numero2
}

let resultado = soma(2,2)
console.log(resultado)

function parimpar(resultado){
    if(resultado%2 == 0){
        return 'É par!'
    }else{
        return 'É impar!'
    }
}

console.log(parimpar(resultado))

