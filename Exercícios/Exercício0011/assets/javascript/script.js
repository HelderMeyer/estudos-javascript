class Person {

    _age = 0
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep(passos){
        this.steps += passos
    }

    get age(){
        return this._age
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set age(x){
        if(typeof x == 'number'){
            this._age = x
        }else{
            console.log('Não é um número!')
        }
    }

}

const buttonAndar = document.querySelector('input#andar')
const buttonAtualizar = document.querySelector('input#atualizar')

let pessoa1 = new Person('Helder', 'Meyer')
let pessoa2 = new Person('João', 'Vitor')
let pessoa3 = new Person('Kleber', 'Marcos')

pessoa1.takeAStep(10)
pessoa1.age = 20

buttonAndar.addEventListener('click', function(){
    pessoa1.takeAStep(1)
})
buttonAtualizar.addEventListener('click', function(){
    console.log(`${pessoa1.fullName} deu ${pessoa1.steps} passos! Ele tem ${pessoa1.age} anos!`)
})

console.log(`${pessoa2.fullName} deu ${pessoa2.steps} passos! Ele tem ${pessoa2.age} anos!`)
