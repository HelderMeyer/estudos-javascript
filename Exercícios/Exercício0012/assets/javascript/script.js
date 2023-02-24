class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    sayHi() {
        console.log(`${this.fullName} disse Olá!`)
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, id) {
        super(firstName, lastName, age)
        this.id = id
    }
    say(){
        super.sayHi()
        console.log(`TESTANDO`)
    }
}

let pessoa1 = new Student('Helder', 'Meyer', 20, 1)

console.log(`Nome: ${pessoa1.fullName}`)
console.log(`Idade: ${pessoa1.age} anos`)
console.log(`Matrícula: ${pessoa1.id}`)
pessoa1.say()